<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import Title from '@/components/Section/Title.vue'
import Content from '@/components/Section/Content.vue'
</script>

<template>
    <Section :dark="true">
        <div class="container">
            <div class="flex flex-col md:flex-row items-center gap-7 md:gap-14">
                <div>
                    <Title>Introduction</Title>
                    <Content>
                        WP Pager is a WordPress plugin that allows you to display images in an album or gallery format.
                        It is a simple and easy to use plugin that allows you to create a galleries of images.
                    </Content>

                    <Content>
                        It's easy to upload images to your Wordpress site, but it's not easy to display them in a gallery or album format.
                        This is where WP Pager comes in. It allows you to create a gallery of images in a few minutes.
                    </Content>
                </div>
                <div>
                    <img
                        src="../assets/intro.webp"
                        alt="WP Pager album"
                        class="w-full max-w-[300px] md:max-w-[900px] h-auto shadow-lg"
                    />
                </div>
            </div>
        </div>
    </Section>
</template>