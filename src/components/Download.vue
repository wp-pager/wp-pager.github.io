<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import Title from '@/components/Section/Title.vue'
import Content from '@/components/Section/Content.vue'
import DownloadButton from '@/components/DownloadButton.vue'
</script>

<template>
    <Section>
        <div class="container">
            <div class="flex flex-col md:flex-row items-center gap-5 md:gap-14">
                <div class="w-full">
                    <Title anchor="download-plugin">Download plugin</Title>
                    <Content>
                        Download the latest version of WP Pager plugin for free and without any paid subscriptions.
                        If you need to download an older version, please visit available <a href="https://github.com/wp-pager/wp-pager/branches" target="_blank" rel="noopener noreferrer">GitHub branches</a> to download.
                    </Content>
                </div>
                <DownloadButton class="py-4 lg:py-5 px-16 lg:px-20 text-lg lg:text-xl" />
            </div>
        </div>
    </Section>
</template>