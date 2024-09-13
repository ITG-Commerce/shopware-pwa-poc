import contentful from 'contentful';

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      contentful: {
        createClient: () => contentful.createClient({
          environment: nuxtApp.$config.public.contentful.environment,
          space: nuxtApp.$config.public.contentful.space,
          accessToken: nuxtApp.$config.public.contentful.accessToken,
        })
      }
    }
  }
});

