import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://wwzftqzebnqusslywxid.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3emZ0cXplYm5xdXNzbHl3eGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDQwNjEsImV4cCI6MjA1NTAyMDA2MX0.IYOMvFPexStLcMLeBZARfUeOlFrAIZ_HUnlY-d4-2ks"
);

// REACT_APP_SUPABASE_URL = "https://wwzftqzebnqusslywxid.supabase.co";

// https: REACT_APP_SUPABASE_ANON_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3emZ0cXplYm5xdXNzbHl3eGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDQwNjEsImV4cCI6MjA1NTAyMDA2MX0.IYOMvFPexStLcMLeBZARfUeOlFrAIZ_HUnlY-d4-2ks";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
