<script setup lang="ts">
import type { Entry } from "contentful";
import type {
  TypeRowProductSkeleton,
} from "~/api-types/content-types";

const { block } = defineProps<{
  block: Entry<TypeRowProductSkeleton>;
}>();

const category = computed(() => block.fields.category);

const { search, getElements } = useListing({
  listingType: "categoryListing",
  categoryId: category.value as string,
});

search({});
</script>

<template>

  <UCarousel
    v-slot="{ item }" :items="getElements" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
    indicators>
    <ProductCard :product="item" class="w-full lg:w-3/7 2xl:w-7/24 mr-0 sm:mr-8 mb-8" />
  </UCarousel>
</template>

<style scoped></style>
