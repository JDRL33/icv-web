import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nafhiyrnophnkpixobey.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hZmhpeXJub3BobmtwaXhvYmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNDU2NDQsImV4cCI6MjA3NDYyMTY0NH0.Gu7qsi1IE64sqPbXjzxV-rVf5cUgYZd9mmpQA5w1CEY";

export const supabase = createClient(supabaseUrl, supabaseKey);
