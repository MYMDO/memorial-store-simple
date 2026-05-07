// Supabase configuration
// Get these from: https://supabase.com/dashboard/project/jxsvcodctysphexpawnu/settings/api

const SUPABASE_URL = 'https://jxsvcodctysphexpawnu.supabase.co';
// anon/public key from "Project API keys" section (starts with "eyJ...")
const SUPABASE_KEY = 'PASTE_YOUR_ANON_KEY_HERE'; 

// Initialize Supabase (CDN version - available as window.supabase)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Supabase initialized:', supabase ? 'SUCCESS' : 'FAILED');
