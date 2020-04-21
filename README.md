## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test coverage

```bash
npm test -- --coverage
```

## Key points

- It might be a bit different from what assignment asks for, it allows to search local places using keyword.
- User position is asked on page loading. If user denies the request, it will fallback to use an IP lookup service to get current user's location. TODO: Need more work to allow change the location.
- It's very simple SPA contains three pages: home, search and category.
- Search bar is in placed in header which is part of a global layout. Changes in search bar will result in URL change as well as search result change. Debounce is used to avoid unnecessary API requests.
- User input as well as URL query parameter is sanitized from XSS attack.
- An venue API is hosted on server side to proxy FourSqaure api call, so we do't leak credential to front end.
- Most of components under components/ have unit test using jest/enzyme with mocks

## Folder Structures

- components - most function components and libraries.
- containers - wrapper component with logic to load venue data
- pages - a few page level component following Next.js conventions
- pages/api - venue api under /api/venues
