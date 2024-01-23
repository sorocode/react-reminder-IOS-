import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zwxllgrjrwjibqywmpxv.supabase.co";
const supabaseAconKey = import.meta.env.VITE_SUPABSE_KEY;
export const supabase = createClient(supabaseUrl, supabaseAconKey);
