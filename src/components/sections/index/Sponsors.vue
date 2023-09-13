<template>
    <T_Section>
        <div class="w-xl max-lg:w-lg max-md:w-md">
            <div class="flex justify-between items-center max-sm:gap-6">
                <div class="w-[200px] max-lg:w-[150px] max-md:w-[130px] max-sm:w-[100px]" v-for="(sponsor, i) in sponsors" :key="i">
                    <img :src="dynamicImage(sponsor.logo)" />
                </div>
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // import template
    import T_Section from '@/templates/T_Section.vue'
    // import composabels
    import dynamicImage from '@/composabels/dynamic_image.js'

    // data
    const sponsors = [
        { href: '', logo: 'logo/instagram.png' },
        { href: '', logo: 'logo/ferrari.png' },
        { href: '', logo: 'logo/lamborghini.png' },
        { href: '', logo: 'logo/disney.svg' },
    ]
</script>
