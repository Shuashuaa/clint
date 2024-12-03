<script setup lang="ts">
// pi-copy will have a copy function upon click
</script>

<template>
    <div class="w-full bg-white dark:bg-[#242625]">
        <div class="flex flex-col justify-center items-center p-[75px] *:dark:text-white *:text-[#242625] *:font-Inter">
            <p class="text-5xl pb-1 font-bold">is there a spark?</p>
            <p class="text-2xl pb-5">Let's Work Together!</p>
            <p class="cursor-pointer border border-[#242625] dark:border-slate-100  rounded-xl p-2 px-4">
                Jaderhin-Clint@sample.google.com 
                <i class="pi pi-copy ml-2"></i>
            </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center rounded-t-[2.5rem] shadow-inner p-12 gap-3 
        dark:bg-[#93a9d1] bg-[#F7CAC9] bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,#93a9d1,rgba(255,255,255,0))] 
        *:text-black *:font-Inter"
        >
            <div class="flex flex-col items-center md:items-start">
                <img class="mb-3" width="120" src="../assets/imgs/clint.png" alt="">
                <h1 class="text-lg">@2024-Present</h1>
                <p class="text-sm">Jaderhin Clint Lucero / Code by Joshua Tania</p>
            </div>
            <p>~</p>
            <div class="flex md:flex-col md:items-end gap-10 md:gap-3">
                <p>Home</p>
                <p>Projects</p>
                <p>About</p>
                <p>Hire Me</p>
            </div>
        </div>
    </div>
</template>