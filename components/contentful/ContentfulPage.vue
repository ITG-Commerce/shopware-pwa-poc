<script setup lang="ts">
import type { Entry } from 'contentful';
import { isTypeHero, type TypeHeroFields, type TypeHeroSkeleton, type TypePageSkeleton } from '~/api-types/content-types';

const { page } = defineProps<{
    page: Entry<TypePageSkeleton>
}>();

const blocks = computed(() => page.fields.blocks as Entry<TypeHeroSkeleton>[]);

</script>

<template>
    <div class="w-full min-h-screen">
        <Title>{{ page.fields.title }}</Title>
        <Meta name="description" :content="page.fields.description as string" />
        <div v-if="page.fields.blocks" class="flex flex-col">
            <div v-for="block in blocks" :key="block.sys.id">
                <ContentfulHero
                    v-if="isTypeHero(block as any)"
                    :block="block.fields as any" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>