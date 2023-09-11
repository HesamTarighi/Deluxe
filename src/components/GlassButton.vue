<template>
    <button
    type="button"
    class="glass-button relative overflow-hidden flex gap-2 font-sen transition-all duration-300 hover:bg-black/40"
    @mousedown="onClick($event)"
    ref="button"
    >
        <!-- bubble -->
        <transition name="scale">
            <span
            class="w-[50px] h-[50px] bg-white/10 rounded-full absolute transform scale-0 transition-all duration-1000"
            :style="`left: ${bubble.position.x}px; top: ${bubble.position.y}px;`"
            v-if="bubble.active"
            >
            </span>
        </transition>
        <slot />
    </button>
</template>

<style scoped>
    .scale-enter-from {
        opacity: 0;
        transform: scale(0);
    }
    .scale-leave-to {
        opacity: 0;
    }

    .scale-enter-to,
    .scale-leave-from {
        opacity: 1;
        transform: scale(7);
    }
</style>

<script setup>
    // Import composabels and utils
    import { ref, reactive, watch, defineProps } from 'vue';

    // Manage props
    defineProps({
        theme: { type: String, default: 'glass' },
        position: { type: String, default: 'relative' }
    })

    // Dom elements
    const button = ref(null)

    // Data
    const bubble = reactive({
        active: false,
        position: {
            x: 0, y: 0
        }
    });

    // Methods
    function onClick (e) {
        bubble.position.x = e.offsetX;
        bubble.position.y = e.offsetY;
    }

    // Use composabels and utils
    watch(bubble.position, () => {
        bubble.active = true;

        setTimeout(() => bubble.active = false, 400);
    });
</script>
