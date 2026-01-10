import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterData {
  email: string;
}

async function sendEmailWithResend(
  to: string,
  subject: string,
  htmlContent: string
): Promise<{ success: boolean; error?: string }> {
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Buzz Newsletter <noreply@buzzbuzzin.com>',
        to: [to],
        subject: subject,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return { success: false, error: `Email send failed: ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

function generateWelcomeEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Buzz Newsletter</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to Buzz Newsletter!</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <p style="color: #1f2937; font-size: 16px; margin-top: 0;">
      Thank you for subscribing to the Buzz newsletter! You're now part of our community and will receive monthly updates about:
    </p>
    
    <ul style="color: #1f2937; padding-left: 20px;">
      <li style="margin-bottom: 10px;">Latest product updates and features</li>
      <li style="margin-bottom: 10px;">Industry news and insights</li>
      <li style="margin-bottom: 10px;">Training opportunities and Academy updates</li>
      <li style="margin-bottom: 10px;">Company milestones and achievements</li>
    </ul>
    
    <p style="color: #1f2937; margin-bottom: 0;">
      We're excited to share our journey with you. Stay tuned for our next newsletter!
    </p>
  </div>
  
  <div style="background: #1f2937; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="color: #9ca3af; margin: 0; font-size: 14px;">
      This email was sent to ${email} from the Buzz newsletter subscription.
    </p>
  </div>
</body>
</html>
  `;
}

function generateNotificationEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Newsletter Subscription</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Newsletter Subscription</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <p style="color: #1f2937; font-size: 16px; margin-top: 0;">
      A new subscriber has joined the Buzz newsletter:
    </p>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;">
      <p style="color: #1f2937; margin: 0; font-size: 18px; font-weight: 500;">
        <a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a>
      </p>
    </div>
  </div>
  
  <div style="background: #1f2937; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="color: #9ca3af; margin: 0; font-size: 14px;">
      This notification was sent from the Buzz newsletter subscription system.
    </p>
  </div>
</body>
</html>
  `;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const data: NewsletterData = await req.json();

    // Validate email
    if (!data.email || !data.email.trim()) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase client with service role key for database operations
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .eq('email', data.email.toLowerCase().trim())
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Database check error:', checkError);
      return new Response(
        JSON.stringify({ error: 'Failed to check subscription status' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If already subscribed, return success (idempotent)
    if (existing) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'You are already subscribed to our newsletter.',
          already_subscribed: true
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert subscription into database
    const { data: subscription, error: insertError } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email: data.email.toLowerCase().trim(),
        subscribed_at: new Date().toISOString(),
        status: 'active',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save subscription' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send welcome email to subscriber
    const welcomeEmailHtml = generateWelcomeEmailHtml(data.email);
    const welcomeEmailResult = await sendEmailWithResend(
      data.email,
      'Welcome to Buzz Newsletter!',
      welcomeEmailHtml
    );

    // Send notification email to admin (optional)
    const adminEmail = Deno.env.get('ADMIN_EMAIL') || 'hello@buzzbuzzin.com';
    const notificationEmailHtml = generateNotificationEmailHtml(data.email);
    await sendEmailWithResend(
      adminEmail,
      'New Newsletter Subscription',
      notificationEmailHtml
    );

    // Update subscription status based on email result
    if (subscription) {
      const { error: updateError } = await supabase
        .from('newsletter_subscriptions')
        .update({
          welcome_email_sent: welcomeEmailResult.success,
          welcome_email_error: welcomeEmailResult.error || null,
        })
        .eq('id', subscription.id);

      if (updateError) {
        console.error('Database update error:', updateError);
      }
    }

    // Return success even if email failed (subscription is saved)
    if (!welcomeEmailResult.success) {
      console.warn('Welcome email send failed but subscription saved:', welcomeEmailResult.error);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to the Buzz newsletter!',
        id: subscription?.id 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
