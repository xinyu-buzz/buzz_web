import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Email routing configuration
const EMAIL_ROUTING: Record<string, string> = {
  technical: 'technical@buzzbuzzin.com',
  support: 'hello@buzzbuzzin.com',
  academy: 'hello@buzzacademy.world',
  media: 'media@buzzbuzzin.com',
  bd: 'bd@buzzbuzzin.com',
  partnerships: 'partnerships@buzzbuzzin.com',
};

// Category display names for email subject
const CATEGORY_NAMES: Record<string, string> = {
  technical: 'Technical Support',
  support: 'Customer Support',
  academy: 'Academy',
  media: 'Media',
  bd: 'Business Development',
  partnerships: 'Partnerships',
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  category: string;
  subject: string;
  message: string;
}

async function sendEmailWithResend(
  to: string,
  subject: string,
  htmlContent: string,
  replyTo: string
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
        from: 'Buzz Contact Form <noreply@buzzbuzzin.com>',
        to: [to],
        reply_to: replyTo,
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

function generateEmailHtml(data: ContactFormData): string {
  const categoryName = CATEGORY_NAMES[data.category] || data.category;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Category: ${categoryName}</p>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1f2937; font-size: 18px; margin-top: 0;">Subject: ${data.subject}</h2>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
      <h3 style="color: #6b7280; font-size: 12px; text-transform: uppercase; margin: 0 0 15px 0;">Contact Details</h3>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name:</td>
          <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #f59e0b;">${data.email}</a></td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Company:</td>
          <td style="padding: 8px 0; color: #1f2937;">${data.company}</td>
        </tr>
        ` : ''}
        ${data.phone ? `
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
          <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #f59e0b;">${data.phone}</a></td>
        </tr>
        ` : ''}
      </table>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
      <h3 style="color: #6b7280; font-size: 12px; text-transform: uppercase; margin: 0 0 15px 0;">Message</h3>
      <p style="color: #1f2937; margin: 0; white-space: pre-wrap;">${data.message}</p>
    </div>
  </div>
  
  <div style="background: #1f2937; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="color: #9ca3af; margin: 0; font-size: 14px;">
      This email was sent from the Buzz website contact form.
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
    const data: ContactFormData = await req.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'category', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!data[field as keyof ContactFormData]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate category
    if (!EMAIL_ROUTING[data.category]) {
      return new Response(
        JSON.stringify({ error: 'Invalid category' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const destinationEmail = EMAIL_ROUTING[data.category];
    const categoryName = CATEGORY_NAMES[data.category];

    // Create Supabase client with service role key for database operations
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert submission into database
    const { data: submission, error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        category: data.category,
        destination_email: destinationEmail,
        subject: data.subject,
        message: data.message,
        status: 'pending',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email via Resend
    const emailSubject = `[${categoryName}] ${data.subject}`;
    const emailHtml = generateEmailHtml(data);
    const emailResult = await sendEmailWithResend(
      destinationEmail,
      emailSubject,
      emailHtml,
      data.email
    );

    // Update submission status based on email result
    const { error: updateError } = await supabase
      .from('contact_submissions')
      .update({
        status: emailResult.success ? 'sent' : 'failed',
        error_message: emailResult.error || null,
      })
      .eq('id', submission.id);

    if (updateError) {
      console.error('Database update error:', updateError);
    }

    // Return success even if email failed (submission is saved)
    if (!emailResult.success) {
      console.warn('Email send failed but submission saved:', emailResult.error);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been submitted successfully.',
        id: submission.id 
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
