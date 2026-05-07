// Supabase configuration
// REPLACE these with your own values from https://supabase.com/dashboard
const SUPABASE_URL =  'https://jxsvcodctysphexpawnu.supabase.co/rest/v1/'; //'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9exTLxabIh3PUjUMLdwDRg_x9EE5VrK'; //'YOUR_ANON_KEY'; // public anon key

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
