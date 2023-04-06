<script setup lang="ts">
import LogoIcon from '@/components/Icons/LogoIcon.vue'
import DownloadButton from '@/components/DownloadButton.vue'
</script>

<template>
    <div class="h-[70vh] bg-gradient-to-r from-gray-800 to-gray-900 relative">
        <LogoIcon
            color="#111827"
            width="80%"
            height="80%"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />

        <div class="flex text-white items-center justify-center h-[70vh] relative z-10">
            <div class="text-center">
                <h1 class="text-xl md:text-2xl lg:text-4xl font-bold">WP Pager</h1>
                <h2 class="text-md md:text-lg lg:text-xl">WordPress plugin for images album</h2>
                <h3 class="opacity-70">Free and open-sourced</h3>

                <div>
                    <DownloadButton />
                    <small class="block mt-1 opacity-70">Download the latest version</small>
                </div>
            </div>
        </div>
    </div>
</template>