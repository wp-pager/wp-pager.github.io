<script setup lang="ts">
import { onMounted } from 'vue'
import handleScrollingToAnchor from '@/modules/handleScrollingToAnchor'

onMounted(() => handleScrollingToAnchor())
</script>

<template>
    <div class="text-gray-900">
        <div class="text-center py-5">
            <h1 class="text-2xl">🤷🏻 WP Pager download is temporary disabled</h1>
        </div>
    </div>
</template>
