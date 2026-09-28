import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.ZYNOVIX_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.ZYNOVIX_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);