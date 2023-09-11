<template>
  <div class="w-full">
    <HeroSection />

    <main class="w-full min-h-screen bg-secondary py-[150px] space-y-[150px] relative">
      <!-- Sections -->
        <!-- Sponsors section -->
        <SponsorsSection />
        <!-- Products section -->
        <ProductsSection />
        <!-- Highlight section -->
        <HighlightSection />
        <!-- Highlight Product section -->
        <HighlightProductSection />
    </main>

    <V_Footer />
  </div>
</template>

<script setup>
  // Import components
    // Base
    import HeroSection from '@/components/sections/HeroSection.vue'
    import V_Footer from '@/components/base/V_Footer.vue'
    // Sections
    import SponsorsSection from '@/components/sections/index/Sponsors.vue'
    import ProductsSection from '@/components/sections/index/Products.vue'
    import HighlightSection from '@/components/sections/index/Highlight.vue'
    import HighlightProductSection from '@/components/sections/index/HighlightProduct.vue'
</script>
