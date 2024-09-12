import type { ContentfulClientApi } from "contentful";

export async function useContentfulPage(slug: string) {
    const { $contentful } = useNuxtApp();
    const contentfulClient: ContentfulClientApi<any> = $contentful.createClient();

    const result = await useAsyncData<any>(
        "contentfulLandingPage" + slug,
        async () => {
            const landingPages = await contentfulClient.getEntries({
                content_type: 'landingPage',
            });

            const landingPage = landingPages.items.find(item => item.fields.slug === slug)

            return landingPage;
        },
    );

    return result;
}