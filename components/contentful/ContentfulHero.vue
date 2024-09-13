<script setup lang="ts">
import type { Entry } from "contentful";
import type {
  TypeHeroSkeleton,
} from "~/api-types/content-types";

const { block } = defineProps<{
  block: Entry<TypeHeroSkeleton>;
}>();
</script>

<template>
  <div
    class="relative flex items-center justify-start h-screen bg-gray-100 bg-cover bg-right"
    :style="{ backgroundImage: `url(${block.fields.image.fields.file.url})` }"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="md:w-3/4 rounded-xl bg-slate-100/20 p-4">
        <h1 class="text-4xl font-bold text-gray-800 uppercase">
          {{ block.fields.title }}
        </h1>
        <p class="mt-2 text-lg font-medium text-gray-800">
          {{ block.fields.subtitle }}
        </p>
        <NuxtLink :to="block.fields.link">
          <button
            class="justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform transition duration-400 md:hover:scale-110 flex mt-4"
            :class="{
              'text-black bg-yellow-300 hover:bg-yellow-700 uppercase': true,
            }"
            type="button"
            data-testid="account-payment-submit-button"
          >
            Shop now
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
