# Kenya Location Dating

Location-based online dating platform for people in Kenya.

## Core Idea
- Users create profiles (photos, age, bio, interests, tribe, religion, etc.)
- GPS/location for nearby matching by county (Nairobi, Mombasa, Kisumu, Kiambu...)
- Swipe/like/match/chat
- Filters: distance, age, interests, lifestyle modes (student/pro/church)
- Local: Sheng vibes, M-Pesa for premium

## Features (Starter)
- Landing page with mock profiles
- Browser geolocation detection
- County filter
- Ready for Netlify + GitHub

## Tech
- Frontend: Next.js (App Router)
- Hosting: Netlify (zero-config Next.js support)
- Future: Node.js/Django backend, PostgreSQL/MongoDB, real-time chat (Socket.io or Supabase), Google Maps, M-Pesa API

## Deploy
1. Repo: https://github.com/gachiesamuel14/kenya-location-dating
2. Netlify site: kenya-location-dating.netlify.app (connect this GitHub repo in Netlify dashboard for continuous deploy)
3. Or use Netlify CLI: `netlify deploy --prod`

## Next Steps
- Add auth (NextAuth or Clerk)
- Real database (Supabase recommended for speed)
- Photo upload (Cloudinary or Netlify Blobs)
- Matching algorithm based on coords
- Safety/report system
- Notifications

Safety note: Always meet in public, verify profiles. App for 18+.
