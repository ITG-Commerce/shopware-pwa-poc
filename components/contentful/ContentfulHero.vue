<script setup lang="ts">
import type { TypeHeroFields, TypeHeroSkeleton } from '~/api-types/content-types';

const { block } = defineProps<{
    block: TypeHeroFields
}>();
</script>

<template>
    <div class="">
            {{  block.title }}
    </div>
</template>

<style scoped></style>