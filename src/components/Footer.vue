<script setup lang="ts">
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const copyEmail = (code: string) =>{
    // alert(`${code} is copied to clipboard`)
    // copy(code);

    Toastify({
        text: `${code} is successfully copied`,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        style: {
            background: "linear-gradient(to right, #fff, #fff9)",
            borderRadius: "10px",
            color: "black"
        },
    }).showToast();
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
            <div class="flex flex-col items-center md:items-start 
             *:dark:text-shadow-sm">
                <!-- *:dark:text-white *:dark:shadow-[#474545] -->
                <!-- <img class="mb-3" width="120" src="../assets/imgs/clint.png" alt=""> -->
                <span class="mb-3 text-2xl text-white relative">
                    <img class="imgr absolute invisible dark:visible w-[150px] md:w-[70%]" src="../assets/imgs/CLINT-default.svg" alt="">
                    <img class="imgr visible dark:invisible w-[150px] md:w-[70%]" src="../assets/imgs/CLINT-black.svg" alt="">
                </span>
                <h1 class="text-sm dark:text-white text-gray-800">@2024 - Present | All Rights Reserved.</h1>
                <p class="text-lg font-bold dark:text-white text-gray-800">Jaderhin Clint Lucero</p>
                <hr>
                <br>
                <p class="text-[0.7rem] flex items-center dark:text-gray-300 text-gray-600"
                >
                    Made with
                    &nbsp; 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z"/></svg>
                    &nbsp; 
                    and
                    &nbsp; 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 17.23q-2.579 0-4.414-1.729Q5 13.771 5 11.231V5q0-.402.299-.701T6 4h12.25q1.14 0 1.945.766Q21 5.53 21 6.654q0 1.179-.794 2.012T18.25 9.5h-.942v1.73q0 2.508-1.769 4.254q-1.768 1.747-4.289 1.747M6 8.5h10.308V5H6zm5.25 7.73q2.114 0 3.585-1.452q1.473-1.453 1.473-3.547V9.5H6v1.73q0 2.114 1.549 3.558t3.701 1.443M17.308 8.5h.942q.74 0 1.245-.538T20 6.654q0-.702-.524-1.178T18.25 5h-.942zM5 20v-1h14v1zm6.154-10.5"/></svg>
                    &nbsp; 
                    by  
                    &nbsp; 
                    <span class="hover:underline transition-all ease-in-out duration-500">
                        <a href="https://shuashuaa.netlify.app/" target="_blank">
                            Joshua Tania.
                        </a>
                    </span> 
                </p>
                
            </div>
            <!-- <p>~</p> -->
            <!-- *:font-Alumni_Sans -->
            <div class="flex md:flex-col md:items-end gap-7 md:gap-4
            *:text-md *:dark:shadow-[#474545] *:dark:text-shadow-sm
            *:dark:text-white">
                
                <p class="cursor-pointer hover:font-bold text-[0.9rem]" @click="topFunction">Home</p>
                <a class="hover:font-bold" href="/projects">
                    <p class="text-[0.9rem]">Projects</p>
                </a>
                <a class="hover:font-bold" href="..#About">
                    <p class="text-[0.9rem]">About</p>
                </a>
                <a class="hover:font-bold" href="/">
                    <p class="text-[0.9rem]">Hire Me</p>
                </a>
            </div>
        </div>
    </div>
</template>