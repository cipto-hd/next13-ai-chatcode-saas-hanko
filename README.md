# AI Chat and Code Generator SaaS using Next 13, TailwindCSS + DaisyUI, OpenAI, and Hanko Auth Solution

This web app is using Next 13. The api code is in "app/api" folder.

## Getting Started

Clone the repo and subtitue environment variable values with your own.

and then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hanko Auth Solution

Fist, you must have hanko account. Just head to https://www.hanko.io/ and then sign in with your email (if the email has not been registered, it will be registered)

I use the awesome Hanko for auth service. I apply my own recipe on using Hanko, mimicking other auth solution.

To use Hanko, I create HankoProvider to register Hanko API URL and use it at top "app/layout.tsx", therefore we can use Hanko Auth and Hanko Profile elements at its children level.To use hanko at client elements, I create react context. All its code is on HankoProvider.tsx.

To guard protected routes, I create middleware at next root folder and also create "authMiddleware.ts" which consist of all the logic for authentication at the server side.

## Other services you must have been registered

OpenAI, Stripe and Crisp.

If you want to deploy the web app, you can register free account at https://vercel.com/ and then for the database you can get free MySQL database at https://planetscale.com/

## Info

I hope I can manage to finish my story about creating this web app at medium site. I will update this README if it has been published.
