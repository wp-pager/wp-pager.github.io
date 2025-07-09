<script setup lang="ts">
import { onMounted } from 'vue'
import handleScrollingToAnchor from '@/modules/handleScrollingToAnchor'
import TopHeader from '@/components/TopHeader.vue'
import Intro from '@/components/Intro.vue'
import Contribute from '@/components/Contribute.vue'
import ManagerFiles from '@/components/ManageFiles.vue'
import Footer from '@/components/Footer.vue'
import FrequentQuestions from '@/components/FrequentQuestions.vue'
import Download from '@/components/Download.vue'

onMounted(() => handleScrollingToAnchor())
</script>

<template>
    <div class="text-gray-900">
        <div class="text-center py-5">
            <h1 class="text-2xl">🤷🏻 WP Pager download is temporary disabled</h1>
        </div>
        <!-- <TopHeader />
        <Intro />
        <ManagerFiles />
        <Contribute />
        <FrequentQuestions />
        <Download />
        <Footer /> -->
    </div>
</template>
