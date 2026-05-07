// Supabase configuration
// Get these from: https://supabase.com/dashboard/project/jxsvcodctysphexpawnu/settings/api

const SUPABASE_URL = 'https://jxsvcodctysphexpawnu.supabase.co';
// anon/public key from "Project API keys" section (starts with "eyJ...")
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImJlbmVyIjoic3VwYWJhc2UiLCJyb2xlIjoiYW5vbiIsImV4cCI6MTk4MzgxMjk5Nn0.XXXXX'; 

// CDN version creates window.supabase - use it directly
// Initialize client and store in a different global variable
window.sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Supabase initialized:', window.sbClient ? 'SUCCESS' : 'FAILED');
