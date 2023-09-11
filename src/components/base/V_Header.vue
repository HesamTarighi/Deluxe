<template>
    <header class="w-full flex justify-center absolute top-0 left-0 py-8">
        <nav class="w-xl grid grid-cols-2 items-center max-xl:w-lg max-md:w-md">
            <!-- Site logo -->
            <div>
                <a href="/">
                    <span class="text-primary text-3xl"> DELUXE </span>
                </a>
            </div>
            <!-- Site Links -->
            <div class="flex justify-end gap-6">
                <GlassButton> Login </GlassButton>
                <button> <img src="@/assets/icons/search.png" class="w-[25px]" aria-label="icon" /> </button>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import GlassButton from '@/components/GlassButton.vue'
</script>
