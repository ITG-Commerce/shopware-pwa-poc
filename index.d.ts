// types.d.ts or any existing declaration file
import { ContentfulClientApi } from 'contentful'; //or the appropriate type

import "~/api-types/content-types";

declare module '#app' {
  interface NuxtApp {
    $contentful: {
      createClient: () => ContentfulClientApi;
    };
    $config: {
      contentful: ContentfulConfig;
    };
  }

}
declare module '@nuxt/schema' {
  interface NuxtConfig {
    unocss?: any;
  }
  interface NuxtOptions {
    unocss?: any;
  }
}

interface ContentfulConfig {
  CONTENTFUL_ENVIRONMENT: string;
  CONTENTFUL_SPACE_ID: string;
  CONTENTFUL_ACCESS_TOKEN: string;
}

