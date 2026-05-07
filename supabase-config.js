// Supabase configuration
// Get these from: https://supabase.com/dashboard/project/jxsvcodctysphexpawnu/settings/api

const SUPABASE_URL = 'https://jxsvcodctysphexpawnu.supabase.co';
// anon/public key from "Project API keys" section
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4c3Zjb2RjdHlzcGhleHBhd251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNDUzMDEsImV4cCI6MjA5MzcyMTMwMX0.Yst95PKxXiaGRw-9G53SF7AO-eGjqDuCUl6FHC1Xvcc'; 

// CDN version creates window.supabase - use it directly
// Initialize client and store in a different global variable
window.sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Supabase initialized:', window.sbClient ? 'SUCCESS' : 'FAILED');
