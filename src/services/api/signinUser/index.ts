import { supabase } from "@/services/supabase/client";

export const signinUser = async (email: string, password: string) => {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return user;
};
