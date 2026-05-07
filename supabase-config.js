// Supabase configuration
// Get these from: https://supabase.com/dashboard/project/jxsvcodctysphexpawnu/settings/api

const SUPABASE_URL = 'https://jxsvcodctysphexpawnu.supabase.co';
// anon/public key from "Project API keys" section (starts with "eyJ...")
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4c3Zjb2RjdHlzcGhleHBhd251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTQ1MzEsImV4cCI6MjA2MjE5MDUzMX0.Yst95PKxXiaGRw-9G53SF7AO-eGjqDuCUl6FHC1Xvcc'; 

// Initialize Supabase (CDN version - available as window.supabase)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Supabase initialized:', supabase ? 'SUCCESS' : 'FAILED');
