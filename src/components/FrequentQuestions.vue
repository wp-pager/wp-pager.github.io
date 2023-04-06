<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import useFrequentQuestions from '@/composables/useFrequentQuestions'
import Title from '@/components/Section/Title.vue'

const { qaItems } = useFrequentQuestions()
</script>

<template>
    <Section :dark="true">
        <div class="container">
            <div class="flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-14">
                <div class="w-full">
                    <Title anchor="frequently-asked-questions">
                        Frequently Asked Questions
                    </Title>

                    <ul class="mt-5 lg:mt-7">
                        <li v-for="item in qaItems" :key="item.question">
                            <h3 class="text-lg lg:text-xl font-bold text-gray-700">
                                ❓ {{ item.question }}
                            </h3>
                            <p class="ml-2.5 pl-4 my-2 border-l-2 border-dotted border-gray-400 text-gray-500 text-md lg:text-lg">
                                {{ item.answer }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="../assets/question-mark.webp"
                        width="200"
                        height="200"
                        class="w-32 lg:w-52"
                    />
                </div>
            </div>
        </div>
    </Section>
</template>