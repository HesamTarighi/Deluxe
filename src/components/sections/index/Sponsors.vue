<template>
    <T_Section>
        <div class="w-xl max-lg:w-lg max-md:w-md">
            <div class="flex justify-between items-center">
                <div class="w-[200px] max-lg:w-[150px] max-md:w-[130px] max-sm:w-[100px]" v-for="(sponsor, i) in sponsors" :key="i">
                    <img :src="sponsor.logo" />
                </div>
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // import template
    import T_Section from '@/templates/T_Section.vue'

    // data
    const sponsors = [
        { href: '', logo: './src/assets/logo/instagram.png' },
        { href: '', logo: './src/assets/logo/ferrari.png' },
        { href: '', logo: './src/assets/logo/lamborghini.png' },
        { href: '', logo: './src/assets/logo/disney.svg' },
    ]
</script>
