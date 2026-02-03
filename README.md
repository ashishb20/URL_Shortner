# LinkShrink 
> A full-stack URL shortening service built with the MERN stack. Allowing users to convert the long URLs into shortened, easy-to-share links

## Features
- **Instant Shortening**: Converts any valid Http/Https link.
- **Smart Redirection**: Fast `302` redirects to original sources.
- **Click Tracking**: Persistent counter for every visit.
- **Copy-to-clipboard**: For quick sharing.
- **Responsive Design** : Mobile compatible UI.

## Demos
### Images

### Video

## System Architecture
The application checks for existing URLs, generates a unique key using a non-sequential robust algorithm (`nanoid`), validates the input, and stores the mapping in a high-availability MangoDB cluster
**Data flow:**
1.  **Frontend** Sends `POST /shorten` with long URL.
2.  **Backend** validates a URL format & application rate limits.
3.  **Service** generates a standardized unique key (collision resistant).
4.  **Database** stores the key-value pair (ShortCode -> LongURL).
5.  **Redirect** `Get /:code` looks up the key -> increment click count -> 302  Redirect.

---

## Tech Stack
**Frontend:** React + vite, CSS.
**Backend:** Node.js, Express.
**Database:** MongoDB, 

## Getting Started
### Pre-requisites
- Node.js(v18+)
- React+vite
- MongoDB
### Setup
Clone the repository and create .env files
**1. Backend**
```bash
cd frontend
npm install
npm start
```
**2. Frontend**
```bash
cd frontend
npm install
npm run dev
```
## Future improvements(Ideas)
1. **Caching Layer (Redis)**: cache popular redirects to reduce DB hits.
2. **Load Balancing**: Distribute traffic across multiple Node instances.
3. **Authentication**: Add Authentication.

