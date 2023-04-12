# Sync Web SDKs

This repo contains sample integrations for [Aircore's](https://www.aircore.io/) web SDKs.

For more information you can check out the [docs](https://docs.aircore.io) or jump right into the samples below.

## Setup Instructions

### NPM workspaces

**Note:** For npm version 7 or above 

You can install all the dependencies for all the samples by running the following in the root directory.
```
npm ci
```

This makes all the samples ready to run and eliminates duplicate installation of dependencies.

Then you can do either
```
npm --workspace=sync-chat/vue run dev
```

or

```
cd sync-chat/vue
npm run dev
```

### Individual samples

You can also install just the dependencies of the sample you care about and run it.
Example:
```
cd sync-chat/vue
npm i
npm run dev
```

## Sync Audio
- [Quickstart](https://docs.aircore.io/getting-started/sync-web-quickstart)

### Samples
- [NextJS](/sync-audio/nextjs)
- [React](/sync-audio/react)
- [Vue](/sync-audio/vue)
- [Javascript](/sync-audio/javascript)

## Sync Chat
- [Quickstart](https://docs.aircore.io/getting-started/chat-web-quickstart)

### Samples
- [NextJS](/sync-chat/nextjs)
- [React](/sync-chat/react)
- [Vue](/sync-chat/vue)
- [Javascript](/sync-chat/javascript)
