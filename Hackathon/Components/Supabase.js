import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kywruaqbxcnvwqkjvehe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5d3J1YXFieGNudndxa2p2ZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwODY4MTYsImV4cCI6MjAxNjY2MjgxNn0.WZgKW70RsgFEjqeZmH1iOzYf1XiommVTaK7JOEx2YZ4";
export const supabase = createClient(supabaseUrl, supabaseKey);
