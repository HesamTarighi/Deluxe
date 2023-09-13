<template>
    <T_Section>
        <div class="w-xl space-y-16 max-lg:w-lg max-md:w-md">
            <div class="text-center space-y-6">
                <!-- Title -->
                <h1 class="text-5xl font-lato uppercase max-md:text-4xl max-sm:text-2xl"> find auto parts for any model </h1>
                <!-- Description -->
                <p class="text-lg font-open_sans opacity-70 max-sm:text-sm"> Browse our shop for hundreds of different automotive parts </p>
            </div>

            <!-- Filter menu -->
            <div>
                <div class="w-full bg-third border-2 border-fourth rounded-full grid grid-cols-4 items-center max-lg:rounded-sm max-md:grid-cols-3 max-sm:grid-cols-1">
                    <!-- Select auto part -->
                    <div class="h-full flex justify-center items-center px-6 border-r-2 border-fourth max-lg:h-fit max-md:py-4 max-md:border-none max-md:px-2">
                        <SelectInput label="Select car" :options="['Tesla', 'Ferrari']" />
                    </div>
                    <!-- Select model -->
                    <div class="h-full flex justify-center items-center px-6 border-r-2 border-fourth max-lg:h-fit max-md:py-4 max-md:border-none max-md:px-2">
                        <SelectInput label="Select model" :options="['Tesla', 'Ferrari']" />
                    </div>
                    <!-- Select year -->
                    <div class="h-full flex justify-center items-center px-6 border-r-2 border-fourth max-lg:h-fit max-md:py-4 max-md:border-none max-md:px-2">
                        <SelectInput label="Select year" :options="['Tesla', 'Ferrari']" />
                    </div>
                    <!-- Find action button -->
                    <div class="flex justify-center px-4 py-2 max-md:px-1">
                        <button class="w-full lg-button primary-button flex items-center justify-between max-lg:w-fit max-lg:md-button max-md:rounded-sm">
                            <span> <img src="@/assets/icons/search.png" class="w-[25px]" aria-label="icon" /> </span>
                            <span class="font-roboto max-lg:hidden max-md:block"> find auto parts </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Products card -->
            <div class="flex">
                <div class="w-full grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
                    <!-- card -->
                    <div class="bg-fifth rounded-lg relative" v-for="(product, i) in products" :key="i">
                        <!-- badge -->
                        <div class="absolute top-4 right-0" v-if="product.new">
                            <span class="bg-primary px-2 py-1 rounded-l-full text-[13px]"> New </span>
                        </div>
                        <!-- product image box -->
                        <div>
                            <div class="flex justify-center py-10">
                                <img :src="dynamicImage(product.image)" class="h-[200px] object-cover" />
                            </div>
                        </div>
                        <hr class="border-[1px] border-secondary" />
                        <div class="flex justify-between items-center px-6 py-4">
                            <div class="flex flex-col">
                                <!-- Name -->
                                <span class="capitalize text-xl"> {{ product.name }} </span>
                                <!-- price -->
                                <span class="text-primary font-pt"> ${{ product.price }} </span>
                            </div>
                            <div>
                                <div>
                                    <button class="bg-sixth sm-button rounded-md"> <img src="/src/assets/icons/cart.png" class="w-[25px] h-[30px]" aria-label="icon" /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- view more button -->
            <div class="flex justify-center">
                <div>
                    <button class="outline-button"> View All </button>
                </div>
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // import template
    import T_Section from '@/templates/T_Section.vue'
    // import components
    import SelectInput from '@/components/SelectInput.vue'
    // import composabels
    import dynamicImage from '@/composabels/dynamic_image.js'

    // data
    const products = [
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png', new: true },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire.png' },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png', new: true },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png' },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png', new: true },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png', new: true },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png', new: true },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png' },
        { name: 'Tire part', price: 100.99, image: 'images/products/tire2.png' },
    ]
</script>
