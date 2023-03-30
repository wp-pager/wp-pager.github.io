<script setup lang="ts">
import Section from '@/components/Section/Section.vue'
import Title from '@/components/Section/Title.vue'
import Content from '@/components/Section/Content.vue'
import Link from '@/components/Section/Link.vue'
</script>

<template>
    <Section>
        <div class="container">
            <div class="flex flex-col md:flex-row items-center gap-7 md:gap-14">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-[120px] h-auto"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </div>
                <div>
                    <Title>Contribute</Title>
                    <Content>
                        As an open source project, we are committed to continuously improving the plugin and welcome
                        contributions from the community.
                        You can support the development of WP Pager by reporting bugs, suggesting new features,
                        or submitting pull requests on our <Link href="https://github.com/SerhiiCho/wp-pager">GitHub page</Link>.
                    </Content>

                    <Content>
                    </Content>
                    <Content>
                        <span>
                            If you find WP Pager useful and would like to show your appreciation for our efforts,
                            you can also contribute to the project by <Link href="https://www.buymeacoffee.com/serhiicho">buying us a coffee</Link>.
                            Every contribution helps us stay motivated and dedicated to enhancing the plugin's functionality and usability.
                            Thank you for your support!
                        </span>

                        <div class="text-center md:text-right mt-7">
                            <a
                                href="https://www.buymeacoffee.com/serhiicho"
                                target="_blank"
                                class="inline-block max-w-[220px]"
                            >
                                <img
                                    src="https://cdn.buymeacoffee.com/buttons/v2/default-white.png"
                                    alt="Buy Me A Coffee"
                                >
                            </a>
                        </div>
                    </Content>
                </div>
            </div>
        </div>
    </Section>
</template>