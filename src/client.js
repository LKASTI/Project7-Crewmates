import {createClient} from "@supabase/supabase-js"

const URL = "https://rkokuzqnncmghnvugabd.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrb2t1enFubmNtZ2hudnVnYWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTYxNTksImV4cCI6MTk5NjIzMjE1OX0.boNPxcCnOaHamZtk9qAQFnEVzunC7AuRmwoZpENY5lk"

export const supabase = createClient(URL, API_KEY)