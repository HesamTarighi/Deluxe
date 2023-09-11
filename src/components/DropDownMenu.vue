<template>
    <transition name="slide-fade">
        <div v-if="open" class="w-full bg-third rounded-md shadow-md px-4 py-2 absolute right-0 top-[55px] z-50">
            <ul>
                <li v-for="(option, i) in options" :key="i" class="cursor-pointer" @click="$emit('onSelectedOption', option)">
                    <span class="py-1 block"> {{ option }} </span>
                    <hr class="opacity-20" v-if="i != options.length -1" />
                </li>
            </ul>
        </div>
    </transition>
</template>

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.4s;
    }

    .slide-fade-leave-active {
        transition: all .4s;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
</style>

<script setup>
    // import composabels
    import { defineProps } from 'vue'

    // manage props
    defineProps([
        'open',
        'options'
    ])
</script>
