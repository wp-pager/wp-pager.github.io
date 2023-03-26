<script setup lang="ts">
function download(): void {
    window.open('https://github.com/SerhiiCho/wp-pager/raw/main/wp/src/wp-content/plugins/wp-pager/versions/wp-pager.zip', '_blank')
}
</script>

<template>
    <div class="h-[70vh] bg-hero bg-center bg-cover relative">
        <div class="absolute inset-0 bg-gray-900/90"></div>

        <div class="flex text-white items-center justify-center h-[70vh] relative z-10">
            <div class="text-center">
                <h1 class="text-xl md:text-2xl lg:text-4xl font-bold">WP Pager</h1>
                <h2 class="text-md md:text-lg lg:text-xl">WordPress plugin for images album</h2>
                <h3 class="opacity-70">Free and open-sourced</h3>

                <button
                    @click="download"
                    class="mt-3 py-2 px-10 bg-teal-700 rounded-full text-lg shadow-lg"
                    type="button"
                >
                    Download
                </button>
            </div>
        </div>
    </div>
</template>