// types.d.ts or any existing declaration file
import { ContentfulClientApi } from 'contentful'; // or the appropriate type

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

interface ContentfulConfig {
  CONTENTFUL_ENVIRONMENT: string;
  CONTENTFUL_SPACE_ID: string;
  CONTENTFUL_ACCESS_TOKEN: string;
}