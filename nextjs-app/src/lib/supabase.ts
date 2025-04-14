import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://syktglpdbavjhzdlhdua.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5a3RnbHBkYmF2amh6ZGxoZHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODcwOTUsImV4cCI6MjA1OTk2MzA5NX0.O2ToOE5fwqb7DtJ_GmOa22yZTchSVCQNxDzpFYagy3M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
