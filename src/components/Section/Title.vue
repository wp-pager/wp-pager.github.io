<script setup lang="ts">
import LinkIcon from '@/components/Icons/LinkIcon.vue'

type Props = {
    anchor: string
}

const { anchor } = defineProps<Props>()
</script>

<template>
    <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left relative flex items-center gap-3">
        <a
            :href="`#${anchor}`"
            :id="anchor"
            class="opacity-40"
        >
            <LinkIcon class="w-5 h-5" />
        </a>

        <slot />
    </h2>
</template>
