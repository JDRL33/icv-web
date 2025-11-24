import { createClient } from "@supabase/supabase-js";
import React from "react";

const supabaseUrl = import.meta.env.VITE_APP_API_API;
const supabaseKey = import.meta.env.VITE_APP_API_KEY;

console.log(import.meta.env.VITE_APP_API_API);

export const supabase = createClient(supabaseUrl, supabaseKey);
