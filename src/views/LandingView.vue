<script setup lang="ts">
import { initializeKinesis } from '@amineyarman/kinesis'
document.addEventListener("DOMContentLoaded", () => {
    initializeKinesis();
});

defineProps({
    landingNameTitle: String,
    bgNameLeft: String,
    bgNameRight: String
})
</script>

<template>
    <div>
        <div data-kinesistransformer data-ks-interaction="mouse" data-ks-initialized="true" 
        class="transform flex flex-col items-center pt-5 justify-center overflow-hidden md:h-[95svh] bg-[#F7CAC9] bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,#93a9d1,rgba(255,255,255,0))] 
        dark:bg-[#242625] dark:bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,#93a9d1,rgba(255,255,255,0))] transition-all ease-in-out md:relative">
            
            <p data-kinesisscroll-item data-ks-transform="scale" data-ks-strength="15" 
            class="fontbgl text-[#ffd8d8] dark:text-[#2C2C2C] font-[sans-serif] font-black italic tracking-widest text-6xl md:text-9xl text-shadow-sm top-[20%] left-[10%] absolute">
                {{ bgNameLeft }}
            </p>
            <p data-kinesisscroll-item data-ks-transform="scale" data-ks-strength="15"
            class="fontbgr text-[#b6d1cb] dark:text-[#2C2C2C] font-[sans-serif] font-black italic tracking-widest text-7xl md:text-8xl text-shadow-sm top-[50%] right-[20%] md:top-[40%] md:right-[10%] absolute">
                {{ bgNameRight }}
            </p>

            <img data-kinesisdistance-item data-ks-strength="5" data-ks-startdistance="2000" 
            draggable="false" class="w-[40svh] ml-[80px] md:w-[40svh] md:absolute md:top-0 z-10" src="../assets/imgs/top111524.png" alt="">
            <img data-kinesisdistance-item data-ks-strength="5" data-ks-startdistance="2000"
            draggable="false" class="w-[48svh] ml-[49px] mt-[-10px] md:w-[49svh] md:absolute md:top-[28%] md:rotate-[-5deg] z-10" src="../assets/imgs/center111524.png" alt="">
            <img data-kinesisdistance-item data-ks-strength="5" data-ks-startdistance="2000"
            draggable="false" class="w-[47svh] ml-[-50px] mt-[-18px] md:w-[47svh] md:h-[50svh] md:absolute md:bottom-0 z-10" src="../assets/imgs/bottom111524.png" alt="">
            
            <p class="text-white font-lato font-black italic tracking-widest text-lg md:text-3xl text-shadow-sm shadow-[black] bottom-[15%] md:bottom-[25%] absolute z-10">
                {{ landingNameTitle }}
            </p>
        </div>
    </div >
</template>
