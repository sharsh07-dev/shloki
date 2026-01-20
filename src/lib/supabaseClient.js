import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fzliigdltdpdadsreljd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6bGlpZ2RsdGRwZGFkc3JlbGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MDYyNDAsImV4cCI6MjA4NDQ4MjI0MH0.FE5L3SuyXYcG7HSowABCwZWHHMY22IMw-qNZiuB3vio'

export const supabase = createClient(supabaseUrl, supabaseKey)