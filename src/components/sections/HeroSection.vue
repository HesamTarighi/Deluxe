<template>
    <div>
        <!-- Hero sections -->
        <section
        class="w-full h-screen min-h-screen bg-cover relative flex flex-col items-center z-10 before:w-full before:h-full before:-z-10 before:transition-all before:duration-300 after:w-full after:h-full after:bg-gradient-to-t after:from-secondary after:from-10% after:via-secondary/95 after:via-20% after:to-secondary/30 after:to-70% after:left-0 after:top-0 after:-z-10 max-lg:bg-[50%]"
        :style="`background-image: url('${dynamicImage(slides[activeSlide -1])}');`"
        :class="animation ? 'before:bg-secondary/100' : 'before:bg-secondary/0'"
        >
           <!-- Header -->
            <div class="w-full relative">
                <V_Header />
            </div>
            <!-- Main -->
            <div class="h-[90%] flex items-center">
                <div class="w-xl max-xl:w-lg max-md:w-md max-md:mx-auto">
                    <div class="w-2/3 space-y-10 max-lg:w-full">
                        <!-- Selogan -->
                        <div class="border border-white/20 inline-block px-4 py-2 uppercase font-nova text-2xl max-md:text-xl">
                            <h2>
                                Get the best auto parts
                            </h2>
                        </div>

                        <!-- description -->
                        <div class="uppercase font-nova text-6xl max-md:text-5xl max-sm:text-3xl">
                            <h1>
                                For hundreds of <span class="font-lato"> vehicles </span>
                            </h1>
                        </div>

                        <!-- Shop button -->
                        <div>
                            <button class="lg-button primary-button gap-2 max-sm:md-button">
                                <span> <img src="@/assets/icons/search.png" class="w-[25px]" aria-label="icon" /> </span>
                                <span> Shop auto parts </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slider dots -->
            <div class="w-full flex justify-center">
                <div class="w-xl flex items-center justify-end gap-2 max-xl:w-lg max-md:w-md max-sm:hidden">
                    <button v-for="(slide, i) in slides" :key="i" @click="selectSlide(i + 1)"> <span class="rounded-full block transition-all duration-200" :class="activeSlide == i + 1 ? 'w-[15px] h-[15px] bg-primary/100' : 'w-[30px] h-[10px] bg-primary/40'"></span> </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    // import components
    import V_Header from '@/components/base/V_Header.vue'
    // import composabels
    import { ref, onMounted } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // data
    const slides = [
        'images/cars-wallpaper/5.jpg',
        'images/cars-wallpaper/4.jpg',
        'images/cars-wallpaper/3.jpg'
    ]
    const activeSlide = ref(1)
    const animation = ref(false)

    // functions
    function selectSlide (slide) {
        animation.value = true
        setTimeout(() => {
            activeSlide.value = slide
            animation.value = false
        }, 500)
    }

    function autoSlide () {
        setInterval(() => {
            if (activeSlide.value < slides.length) selectSlide(activeSlide.value + 1)
            else selectSlide(1)
        }, 5000)
    }

    // use events
    onMounted(() => {
        autoSlide()
    })
</script>
