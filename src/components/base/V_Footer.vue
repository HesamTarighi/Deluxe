<template>
    <footer class="w-full bg-seventh pt-[130px] pb-[50px] flex justify-center relative">
        <div class="w-xl max-lg:w-lg max-md:w-md">
            <div class="space-y-20">
                <!-- list -->
                <div class="w-full flex justify-between max-sm:grid max-sm:grid-cols-2 max-sm:gap-8 max-sm:justify-center">
                    <ul v-for="(item, i) in list" :key="i" class="space-y-4">
                        <div class="text-lg">
                            <h2 class="font-varela capitalize"> {{ item.subject }} </h2>
                        </div>
                        <div class="space-y-2">
                            <li v-for="(link, j) in item.links" :key="j" class="opacity-70 text-sm font-varela capitalize">
                                <a :href="link.href"> {{ link.label }} </a>
                            </li>
                        </div>
                    </ul>
                </div>

                <!-- more information -->
                <div class="space-y-8">
                    <ul class="sm:hidden">
                        <li class="flex gap-4">
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/facebook.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/instagram.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/linkedin.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/twitter.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                        </li>
                    </ul>
                    <ul class="flex justify-between items-center max-sm:gap-4">
                        <li>
                            <a href="/">
                                <span class="text-primary text-3xl max-sm:text-xl"> DELUXE </span>
                            </a>
                        </li>
                        <li>
                            <span class="text-sm"> &copy; Copyright 2019. by Hesam Tarighi </span>
                        </li>
                        <li class="flex gap-4 max-sm:hidden">
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/facebook.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/instagram.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/linkedin.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                            <a href="/"> <button class="p-[10px] bg-fifth rounded-full flex justify-center items-center hover:bg-primary transition-all duration-200"> <img src="@/assets/icons/twitter.png" class="w-[25px] h-[25px] object-cover" /> </button> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const list = [
        {
            subject: 'Information',
            links: [
                { label: 'our company', href:'/' },
                { label: 'contact us', href:'/' },
                { label: 'our services', href:'/' },
                { label: 'why we?', href:'/' },
                { label: 'careers', href:'/' },
            ]
        },
        {
            subject: 'Quicklink',
            links: [
                { label: 'Blog', href: '/' },
                { label: 'About', href: '/' },
                { label: 'Shop', href: '/' },
                { label: 'Cart', href: '/' },
                { label: 'Contact', href: '/' },
            ]
        },
        {
            subject: 'Support',
            links: [
                { label: 'Blog', href: '/' },
                { label: 'Contact', href: '/' },
                { label: 'Refund policy', href: '/' },
                { label: 'Online support', href: '/' },
                { label: 'Money back', href: '/' },
            ]
        },
        {
            subject: 'Store information',
            links: [
                { label: '2076 Stonet lonesome road', href: '/' },
                { label: '1200, USA', href: '/' },
                { label: 'https://example.com', href: '/' },
                { label: '(+85) 12345 12345 1234', href: '/' },
            ]
        },
    ]
</script>
