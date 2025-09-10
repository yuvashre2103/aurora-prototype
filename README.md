# Aurora — Digital Mental Health Prototype (Hackathon)

This is a full prototype (frontend + tiny demo backend) built with React + Vite + Tailwind and a small Express mock server.

## Quick local run

1. unzip (if you downloaded the zip)
2. `cd aurora-prototype`
3. `npm install`
4. Open two terminals:
   - `npm run server`  # starts mock backend on port 4000
   - `npm run dev`     # starts Vite dev server on port 5173
5. Open http://localhost:5173

## Production / deployment suggestions
- Push to GitHub, deploy backend to Railway/Render and frontend to Vercel/Netlify.
- Set environment variable in frontend `VITE_API_BASE_URL` equal to your backend URL (e.g. https://aurora-backend.up.railway.app)
"# aurora-prototype" 
