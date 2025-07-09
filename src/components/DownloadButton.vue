<script setup lang="ts">
import DownloadIcon from '@/components/Icons/DownloadIcon.vue'

function download(): void {
    window.open(
        'https://github.com/wp-pager/wp-pager/archive/refs/heads/master.zip',
        '_blank',
    )
}
</script>

<template>
    <button
        @click="download"
        class="inline-flex items-center mt-3 py-2.5 px-10 bg-teal-700 text-white rounded-full text-lg shadow-lg"
        type="button"
    >
        <DownloadIcon class="w-5 h-5 mr-2" />
        <span>Download</span>
    </button>
</template>
