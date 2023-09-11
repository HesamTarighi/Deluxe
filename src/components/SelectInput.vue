<template>
    <div class="w-full relative">
        <label :for="name || 'select'" class="w-full flex justify-between items-center cursor-pointer capitalize max-sm:text-sm" :class="selectedOption != '' ? 'opacity-100' : 'opacity-50'" @click="open = !open">
            <span v-if="selectedOption == ''"> {{ label }} </span>
            <span v-else> {{ selectedOption }} </span>
            <img src="@/assets/icons/angle-down.png" class="w-[20px] h-[20px] transform -rotate-90 transition-all duration-300" :class="{ 'rotate-0': open }" aria-label="icon" />
        </label>

        <!-- Drop down menu -->
        <Menu :options="options" :open="open" @onSelectedOption="selectOption" v-if="options != ''" />
    </div>
</template>

<script setup>
    // import composabels
    import { defineProps, defineEmits, ref } from 'vue'
    import Menu from '@/components/DropDownMenu.vue'

    // Manage porps
    defineProps([
        'name',
        'label',
        'options'
    ])

    // Manage Emits
    const emit = defineEmits([
        'onSelectedOption'
    ])

    // data
    const open = ref(false)
    const selectedOption = ref('')

    // functions
    function selectOption (option) {
        open.value = false
        selectedOption.value = option
        emit('onSelectedOption', option)
    }
</script>
