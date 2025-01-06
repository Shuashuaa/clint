<script setup lang="ts">
import Description from '@/components/Description.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1500, rotate: -30 },
    ];

    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,

        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                y: -100,
                x: `${-350 * self.progress}vw`,
                duration: 0.5,
                ease: "power3.out",
            });
        },
        // markers: true
    });

    cards.forEach((card) => {
        ScrollTrigger.create({
            trigger: "card.id",
            start: "top top",
            end: "+=1200vh",
            scrub: 1,

            onUpdate: (self) => {
                gsap.to(card.id, {
                    x: `${card.endTranslateX * self.progress}px`,
                    rotate: `${card.rotate * self.progress * 2}`,
                    duration: 0.5,
                    ease: "power3.out",
                });
            },
        })
    })
})

defineProps({
    info: String
})

</script>

<template>

    <Description :desc="info"/>

    <div style="position: relative;" class="pattern bg-[#f7cac9] dark:bg-[#242625] transition-all ease-in-out duration-1000">
        <div class="container">
            <nav>
                <!-- <a href="#">{{ info }}</a> -->
            </nav>

            <section class="wrapper-404">
                <h1 class="text-[#242625] dark:text-[#fff]">Turning dreams</h1>

                <div class="card" id="card-1">
                    <img src="../assets/imgs/reality-1.png" alt="">
                </div>
                <div class="card" id="card-2">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
                </div>
                <div class="card" id="card-3">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
                </div>
                <div class="card top-[15%] right-[-40%] lg:top-[15%] lg:right-[10%]" id="card-4">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
                </div>
            </section>
        </div>
        <section class="outro">
            <!-- <slot/> -->
            <h2 class="text-[#242625] dark:text-[#fff] text-[32vw] lg:text-[24vw] font-black">Into</h2>
            <h2 class="text-[#242625] dark:text-[#fff] text-[32vw] lg:text-[24vw] absolute top-[15%] lg:top-[35%] font-black text-shadow-lg">Reality</h2>
            <div class="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] absolute top-[40%] right-[13%] lg:top-[15%] lg:right-[15%] rotate-12">
                <img class="rounded-2xl" src="../assets/imgs/reality.jpg" alt="">
            </div>
        </section>
    </div>
    
</template>

<style scoped>

* {
    transition: all 0.1s ease;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
}

h1 {
    width: 100%;
    font-size: 36vw;
    font-weight: 400;
    /* text-align: center; */
    margin: 0;
}

h2 {
    width: 100%;
    /* font-size: 18vw; */
    /* font-weight: 400; */
    /* text-align: center; */
    margin: 0;
}

.container {
    /* width: 100%; */
    height: 200vh; 
    /* Tricky for the next component */
}

nav {
    position: fixed;
    top: 0;
    padding: 1rem;
    width: 50%;
    display: flex;
    justify-content: center;
}

.wrapper-404{
    position: absolute;
    top: 0;
    width: 400vw;
    height: 100vh;
    will-change: transform;
}

.card {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
}

#card-1{
    top: 50%;
    left: 30%;
}

#card-2{
    top: 25%;
    left: 40%;
}

#card-3{
    top: 45%;
    left: 60%;
}

/* #card-4{
    top: 15%;
    right: 10%;
} */

.outro {
    align-items: center;
    position: absolute;
    left: 0;
    top: 100vh;
    width: 100%;
    height: 100vh;
}

/* .outro h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    font-size: 40px;
    font-weight: lighter;
    text-align: center;
} */

@media(max-width: 900px){
    .wrapper-404{
        padding-top: 20em;

    }
}
</style>