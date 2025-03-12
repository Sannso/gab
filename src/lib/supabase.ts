import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function supabaseAuth(token: string) {
    return createClient(
        import.meta.env.SUPABASE_URL,
        import.meta.env.SUPABASE_ANON_KEY,
        {
            global: {
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                },
            },
        }
    );
}