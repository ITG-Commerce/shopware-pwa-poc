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
        <div
          class="flex justify-center flex-wrap p-4 md:p-6 lg:p-8"
        >
          <ProductCard
            v-for="product in getElements"
            :key="product.id"
            :product="product"
            class="w-full lg:w-3/7 2xl:w-7/24 mr-0 sm:mr-8 mb-8"
          />
        </div>
</template>

<style scoped></style>
