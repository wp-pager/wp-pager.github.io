<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import Title from '@/components/Section/Title.vue'
import Content from '@/components/Section/Content.vue'
</script>

<template>
    <Section :dark="true">
        <div class="container">
            <div class="flex flex-col-reverse md:flex-row items-center gap-7 md:gap-14">
                <div class="flex-1">
                    <img
                        src="../assets/manage-files.webp"
                        alt="WP Pager album"
                        class="w-full h-auto shadow-xl"
                    />
                </div>
                <div class="flex-1">
                    <Title>Manage files easily</Title>
                    <Content>
                        With WP Pager you can upload and delete files with ease, and provide titles
                        to each file for a better user experience. The plugin organizes your files
                        into an album format with each image represented as a separate page.
                    </Content>

                    <Content>
                        With WP Pager, you can rearrange your images in any order you prefer, allowing
                        your most important images to be displayed prominently. Say goodbye to figuring
                        out how to display a restaurant menu and hello to WP Pager's convenience.
                    </Content>

                </div>
            </div>
        </div>
    </Section>
</template>