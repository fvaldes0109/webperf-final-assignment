# Final assignment task

## What was done

- Assets like bootstrap, jquery and owl carousel were loaded from a CDN.
- These external assets are preloaded to avoid render blocking.
- Images were converted to webp format, and compressed on build with `vite-plugin-image-optimizer`.
- Vite is used to generate a build with minified assets.
- Express was added to serve the build with gzip compression and etags.
- You can see the before and after lightouse reports in the `reports` folder.

## How to run

- Install dependencies with `npm install`.

## Commands

- `npm run dev`: Start the development server.
- `npm run build`: Generate a build.
- `npm run build-and-report`: Generate a build and run lighthouse to generate a report.
- `npm run start`: Generates a build and serves it with express.
