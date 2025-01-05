<script setup lang="ts">
import { initializeKinesis } from '@amineyarman/kinesis'
document.addEventListener("DOMContentLoaded", () => {
    initializeKinesis();
});

defineProps({
    desc: String
})

</script>

<template>
    <div class="flex justify-center h-full w-full bg-white selection:bg-[#F7CAC9] selection:text-[#495d81] transition-all ease-in-out duration-1000
    p-[15%] md:p-[5%] *:font-Inter *:text-lg *:tracking-wide">
        <div class="flex flex-wrap flex-row w-3/4">
            <div
                v-for="(word, index) in desc?.split(' ') " 
                :key="index"
                data-kinesisdistance-item
                data-ks-strength="50"
                data-ks-transform="translate"
                data-ks-interaction="attraction"
                data-ks-startdistance="150"
                >
                <p class="pr-1">
                    {{ word }}
                </p>
            </div>
        </div>
    </div>
</template>