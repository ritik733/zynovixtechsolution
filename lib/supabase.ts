import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.ZYNOVIX_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.ZYNOVIX_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "placeholder-key";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);