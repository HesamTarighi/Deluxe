<template>
    <T_Section>
        <div class="w-xl space-y-24 relative z-10 after:w-full after:h-full after:left-0 after:top-0 after:-z-10">
            <!-- background -->
            <div>
                <img src="@/assets/images/highlight-car.png" class="absolute center-x -z-10 opacity-20"/>
            </div>
            <!-- Title and description -->
            <div class="space-y-6">
                <div class="text-center text-8xl max-md:text-7xl max-sm:text-6xl">
                    <span class="text-primary uppercase font-nova"> flash sales </span>
                </div>
                <div class="text-center text-5xl max-md:text-4xl max-sm:text-xl">
                    <span class="font-lato uppercase"> Grab 25% off on all auto parts </span>
                </div>
            </div>
            <!-- timer -->
            <div class="flex justify-around pb-24">
                <div class="w-[120px] h-[120px] bg-fourth/60 border-2 border-fourth rounded-md flex flex-col justify-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                    <span class="text-6xl font-web max-sm:text-4xl"> {{ day }} </span>
                    <span class="text-md text-primary font-pt max-sm:text-sm"> DAY </span>
                </div>
                <div class="w-[120px] h-[120px] bg-fourth/60 border-2 border-fourth rounded-md flex flex-col justify-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                    <span class="text-6xl font-web max-sm:text-4xl"> {{ hours }} </span>
                    <span class="text-md text-primary font-pt max-sm:text-sm"> HOURS </span>
                </div>
                <div class="w-[120px] h-[120px] bg-fourth/60 border-2 border-fourth rounded-md flex flex-col justify-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                    <span class="text-6xl font-web max-sm:text-4xl"> {{ minutes }} </span>
                    <span class="text-md text-primary font-pt max-sm:text-sm"> MINUTES </span>
                </div>
                <div class="w-[120px] h-[120px] bg-fourth/60 border-2 border-fourth rounded-md flex flex-col justify-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                    <span class="text-6xl font-web max-sm:text-4xl"> {{ seconds }} </span>
                    <span class="text-md text-primary font-pt max-sm:text-sm"> SECONDS </span>
                </div>
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // import template
    import T_Section from '@/templates/T_Section.vue'
    // import composabel
    import { ref, onMounted } from 'vue';

    // data
    const deadLineHours = 412
    const startTime = 1692750942841
    const endTime = new Date(startTime).setHours(deadLineHours)
    const remainingSeconds = ref()
    const day = ref()
    const hours = ref()
    const minutes = ref()
    const seconds = ref()

    // functions
        // get times
            function getDay () {
                return new Date(endTime).getUTCDay() - new Date().getUTCDay()
            }
            function getHours () {
                return new Date(endTime).getUTCHours() - new Date().getUTCHours()
            }
            function getMinutes () {
                return new Date(endTime).getUTCMinutes() - new Date().getUTCMinutes()
            }
            function getSeconds () {
                return new Date(endTime).getUTCSeconds() - new Date().getUTCSeconds()
            }

        // set times
            function setDay () {
                day.value = Math.floor(((remainingSeconds.value / 60) / 60) / 24)
            }
            function setHours () {
                hours.value = Math.floor(((remainingSeconds.value / 60) / 60) % 24)
            }
            function setMinutes () {
                minutes.value = Math.floor((remainingSeconds.value / 60) % 60)
            }
            function setSeconds () {
                seconds.value = Math.floor(remainingSeconds.value % 60)
            }

    // use events
    onMounted(() => {
        setInterval(() => {
            remainingSeconds.value = ((((((getDay() * 24) + getHours()) * 60) + getMinutes()) * 60) + getSeconds())

            setDay()
            setHours()
            setMinutes()
            setSeconds()
        }, 1000)
    })
</script>
