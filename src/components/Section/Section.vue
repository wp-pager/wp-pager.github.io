<script setup lang="ts">
type Props = {
    dark?: boolean
}

const { dark = false } = defineProps<Props>()
</script>

<template>
    <section class="py-12 lg:py-24" :class="{ 'bg-gray-100': dark }">
        <slot />
    </section>
</template>