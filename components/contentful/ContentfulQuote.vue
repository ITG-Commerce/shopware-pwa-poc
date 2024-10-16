<script setup lang="ts">
import type { Entry } from "contentful";
import type { TypeQuoteSkeleton } from "~/api-types/content-types";

const { block } = defineProps<{
	block: Entry<TypeQuoteSkeleton>;
}>();

const quote = computed(() => block.fields.quote);
</script>

<template>
	<div
		v-if="quote"
		class="leading-8 text-gray-800 my-5 mx-auto text-lg font-semibold text-center uppercase sm:text-2xl max-w-[60%]"
		v-html="quote"
	/>
</template>

<style scoped></style>
