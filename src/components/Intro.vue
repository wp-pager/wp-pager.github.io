<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import Title from '@/components/Section/Title.vue'
import Content from '@/components/Section/Content.vue'
</script>

<template>
    <Section>
        <div class="container">
            <div class="flex flex-col md:flex-row items-center gap-7 md:gap-14">
                <div>
                    <Title>Introduction</Title>
                    <Content>
                        Welcome to WP Pager, the free WordPress plugin that empowers you to showcase
                        your images in stunning album or gallery format. Our plugin boasts a sleek and
                        user-friendly interface that enables you to effortlessly create and manage
                        image galleries with ease.
                    </Content>

                    <Content>
                        While uploading images to your WordPress site may be simple, presenting them
                        in a captivating gallery or album format can be challenging. That's why
                        WP Pager was developed to offer an intuitive solution for creating visually
                        impressive galleries of images.
                    </Content>
                </div>
                <div>
                    <img
                        src="../assets/intro.webp"
                        alt="WP Pager album"
                        class="w-full max-w-[300px] md:max-w-[900px] h-auto shadow-xl"
                    />
                </div>
            </div>
        </div>
    </Section>
</template>