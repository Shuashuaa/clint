<script setup lang="ts">

defineProps({
    info: String
})
</script>

<template>
    <div class="flex justify-center w-full bg-white 
    p-[15%] md:p-[5%] *:font-Inter *:text-lg ">
    <!-- text-shadow shadow-[#bebebe] -->
        <p class="md:w-[50svw]">
            {{ info }}
        </p>
    </div>
    
</template>