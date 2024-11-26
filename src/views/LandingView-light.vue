<script setup lang="ts">

defineProps({
    landingNameTitle: String,
    bgNameLeft: String,
    bgNameRight: String
})
</script>

<template>
    <div class="bg-[#70af90] sm:h-[95svh]">
        <!-- <div
            class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div> -->
        <div class="flex flex-col items-center pt-5 justify-center overflow-hidden sm:h-[95svh] bg-[#F7CAC9] bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(179,206,229,1),rgba(255,255,255,0))] md:relative">
            <p class="fontbgl font-[sans-serif] font-black italic tracking-widest text-lg md:text-9xl text-shadow-sm top-[20%] left-[25%] absolute">
                {{ bgNameLeft }}
            </p>
            <p class="fontbgr font-[sans-serif] font-black italic tracking-widest text-lg md:text-9xl text-shadow-sm bottom-70 right-[20%] absolute">
                {{ bgNameRight }}
            </p>

            <img draggable="false" class="w-[40svh] ml-[80px] md:w-[40svh] md:absolute md:top-0" src="../assets/imgs/top111524.png" alt="">
            <img draggable="false" class="w-[48svh] ml-[49px] mt-[-10px] md:w-[49svh] md:absolute md:top-[28%] md:rotate-[-5deg]" src="../assets/imgs/center111524.png" alt="">
            <img draggable="false" class="w-[47svh] ml-[-50px] mt-[-25px] md:w-[47svh] md:absolute md:bottom-[7%]" src="../assets/imgs/bottom111524.png" alt="">
            
            <p class="text-white font-sans font-black italic tracking-widest text-lg md:text-3xl text-shadow-sm shadow-[black] bottom-[25%] absolute">
                {{ landingNameTitle }}
            </p>
        </div>
    </div >
</template>
