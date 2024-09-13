import type { ContentfulClientApi } from "contentful";
import type { TypePageSkeleton } from "~/api-types/content-types";

export async function useContentfulPage(slug: string) {
    const { $contentful } = useNuxtApp();
    const contentfulClient: ContentfulClientApi<any> = $contentful.createClient();

    const result = await useAsyncData(
        "contentfulLandingPage" + slug,
        async () => {
            const landingPages = await contentfulClient.getEntries<TypePageSkeleton>({
                content_type: 'page',
                "fields.slug": slug,
                include: 10,
            });

            const landingPage = landingPages.items.find(item => item.fields.slug === slug)

            return landingPage;
        },
    );

    return result;
}