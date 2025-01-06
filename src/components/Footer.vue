<script setup lang="ts">
import copy from 'copy-text-to-clipboard';

const copyEmail = (code: string) =>{
    alert(`${code} is copied to clipboard`)
    copy(code);
}

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

defineProps({
    email: {
        type: String,
        default: "default@gmail.com"
    }
    
})

</script>

<template>
    <div class="w-full bg-white dark:bg-[#242625] transition-all ease-in-out duration-1000
    *:font-Inter"
    >
        <div class="flex flex-col text-center items-center py-[100px] *:dark:text-white *:text-[#242625]">
            <p class="text-5xl pb-1 font-bold">is there a spark?</p>
            <p class="text-2xl pb-5">Let's Work Together!</p>
            <p @click="copyEmail(email)" class="cursor-pointer border border-[#242625] dark:border-slate-100 rounded-xl p-2 px-4">
                {{ email }}
                <i class="pi pi-copy ml-2"></i>
            </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center rounded-t-[2.5rem] shadow-inner pt-[50px] pb-[30px] md:px-[150px] gap-3 
        dark:bg-[#242625] bg-[#F7CAC9] bg-[radial-gradient(ellipse_80%_80%_at_20%_70%,#93a9d1,rgba(255,255,255,0))] 
        *:text-[#242625] *:tracking-wide"
        >
            <div class="flex flex-col items-center md:items-start *:dark:text-white">
                <!-- <img class="mb-3" width="120" src="../assets/imgs/clint.png" alt=""> -->
                <span class="mb-3 text-2xl text-white relative">
                    <img class="absolute invisible dark:visible w-[150px] md:w-[70%]" src="../assets/imgs/CLINT-default.svg" alt="">
                    <img class="visible dark:invisible w-[150px] md:w-[70%]" src="../assets/imgs/CLINT-black.svg" alt="">
                </span>
                <h1 class="text-sm">@2024 - Present | All Rights Reserved.</h1>
                <p class="text-lg font-bold">Jaderhin Clint Lucero</p>
                <hr>
                <br>
                <a href="https://shuashuaa.netlify.app/" target="_blank">
                    <p class="text-sm">Made w/<3&coffee by <span class="font-bold hover:underline transition-all ease-in-out duration-500">Joshua Tania.</span> </p>
                </a>
                
            </div>
            <!-- <p>~</p> -->
            <!-- *:font-Alumni_Sans -->
            <div class="flex md:flex-col md:items-end gap-7 md:gap-2
            *:text-md *:dark:text-white">
                
                <p class="cursor-pointer hover:font-bold" @click="topFunction">Home</p>
                <a class="hover:font-bold" href="/projects">
                    <p>Projects</p>
                </a>
                <a class="hover:font-bold" href="..#About">
                    <p>About</p>
                </a>
                <a class="hover:font-bold" href="/">
                    <p>Hire Me</p>
                </a>
            </div>
        </div>
    </div>
</template>