
// lib/supabaseAdmin.ts
import { createClient } from "@supabase/supabase-js";

// ✔️ OVO MORA BITI PRIVATE key u Vercelu (NE PUBLIC!)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side Supabase (admin)
export const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
