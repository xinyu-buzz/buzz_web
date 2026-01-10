-- Newsletter Subscriptions Table
-- Run this migration in your Supabase SQL Editor

-- Create the newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  email text NOT NULL UNIQUE,
  subscribed_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'active',
  welcome_email_sent boolean DEFAULT false,
  welcome_email_error text,
  unsubscribed_at timestamp with time zone,
  CONSTRAINT newsletter_subscriptions_pkey PRIMARY KEY (id),
  CONSTRAINT newsletter_subscriptions_status_check CHECK (
    status = ANY (ARRAY['active'::text, 'unsubscribed'::text])
  )
);

-- Create index on email for efficient lookups
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_email_idx 
ON public.newsletter_subscriptions(email);

-- Create index on subscribed_at for efficient querying
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_subscribed_at_idx 
ON public.newsletter_subscriptions(subscribed_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_status_idx 
ON public.newsletter_subscriptions(status);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (for newsletter subscriptions)
CREATE POLICY "Allow anonymous insert" ON public.newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow service role full access (for Edge Functions)
CREATE POLICY "Allow service role full access" ON public.newsletter_subscriptions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Comment on table
COMMENT ON TABLE public.newsletter_subscriptions IS 'Stores newsletter email subscriptions from the website';
