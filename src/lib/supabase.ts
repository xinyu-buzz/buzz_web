import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Missing Supabase environment variables. Contact form will not work properly.'
  );
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Edge Function URL for contact form
export const getContactFormUrl = () => {
  if (!supabaseUrl) return '';
  return `${supabaseUrl}/functions/v1/contact-form`;
};

// Edge Function URL for newsletter subscription
export const getNewsletterUrl = () => {
  if (!supabaseUrl) return '';
  return `${supabaseUrl}/functions/v1/newsletter`;
};
