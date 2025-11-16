
// lib/supabaseAdmin.ts
import { createClient } from "@supabase/supabase-js";

// URL može da ostane public
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// SERVICE ROLE KEY — OVO MORA BITI PRIVATE KI u Vercel env!
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side (admin) klijent — koristi se za API rute
export const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
