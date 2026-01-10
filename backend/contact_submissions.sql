-- Contact Form Submissions Table
-- Run this migration in your Supabase SQL Editor

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  category text NOT NULL,
  destination_email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  error_message text,
  CONSTRAINT contact_submissions_pkey PRIMARY KEY (id),
  CONSTRAINT contact_submissions_category_check CHECK (
    category = ANY (ARRAY['technical'::text, 'support'::text, 'academy'::text, 'media'::text, 'bd'::text, 'partnerships'::text])
  ),
  CONSTRAINT contact_submissions_status_check CHECK (
    status = ANY (ARRAY['pending'::text, 'sent'::text, 'failed'::text])
  )
);

-- Create index on created_at for efficient querying
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx 
ON public.contact_submissions(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx 
ON public.contact_submissions(status);

-- Create index on category for filtering by department
CREATE INDEX IF NOT EXISTS contact_submissions_category_idx 
ON public.contact_submissions(category);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (for contact form submissions)
CREATE POLICY "Allow anonymous insert" ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow service role full access (for Edge Functions)
CREATE POLICY "Allow service role full access" ON public.contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_contact_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_contact_submissions_updated_at();

-- Comment on table
COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions from the website';
