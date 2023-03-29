<script setup lang="ts">
import Section from '@/components/Section.vue'
</script>

<template>
    <Section :dark="true">
        <div class="container">
            <div class="flex flex-col md:flex-row items-center gap-7 md:gap-14">
                <div>
                    <h2 class="section-title">Introduction</h2>
                    <p class="section-content">
                        WP Pager is a WordPress plugin that allows you to display images in an album or gallery format.
                        It is a simple and easy to use plugin that allows you to create a gallery of images in a few minutes.
                    </p>
                </div>
                <div>
                    <img
                        src="../assets/intro.webp"
                        alt="WP Pager album"
                        class="w-full max-w-[900px] h-auto shadow-lg"
                    />
                </div>
            </div>
        </div>
    </Section>
</template>