<template>
    <T_Section>
        <div class="w-xl">
            <div class="space-y-10">
                <div
                class="w-full h-[450px] rounded-lg relative bg-cover z-10 after:w-full after:h-full after:top-0 after:left-0 after:from-secondary after:from-5% after:to-secondary/20 after:to-100% after:-z-10"
                :class="i % 2 == 0 ? 'after:bg-gradient-to-r' : 'after:bg-gradient-to-l rtl'"
                :style="`background-image: url('${product.image}');`"
                v-for="(product, i) in products" :key="i"
                >
                    <div class="w-[70%] h-full flex flex-col justify-center px-24 gap-10 max-lg:w-[80%] max-md:w-[90%] max-sm:w-full max-sm:px-10">
                        <!-- name and title -->
                        <div class="flex flex-col gap-4">
                            <!-- title -->
                            <span class="text-primary font-varela uppercase text-2xl max-sm:text-xl">
                                {{ product.title }}
                            </span>
                            <!-- name -->
                            <span class="font-nova text-5xl max-sm:text-2xl">
                                {{ product.name }}
                            </span>
                        </div>
                        <!-- shop button -->
                        <div>
                            <button class="xl-button" :class="i % 2 == 0 ? 'outline-button' : 'primary-button'"> Shop now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // import template
    import T_Section from '@/templates/T_Section.vue'

    // data
    const products = [
        { name: 'Avon Tires Turbospeed CR228-D', title: 'new arrival', image: '/src/assets/images/cars-wallpaper/1.jpg' },
        { name: 'BFGoodrich Tires g-Force Rival S 1.5', title: 'grab 25% off', image: '/src/assets/images/cars-wallpaper/4.jpg' },
        { name: 'Philips D.I.S. Xenon H.I.D. Headlights', title: 'grab 25% off', image: '/src/assets/images/cars-wallpaper/6.jpg' }
    ]
</script>
