<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45},
        { id: "#card-2", endTranslateX: -1000, rotate: -30},
        { id: "#card-3", endTranslateX: -2000, rotate: 45},
        { id: "#card-4", endTranslateX: -1500, rotate: -30},
    ];

    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        // pinSpacing: false,
        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                y: -250,
                x: `${-350 * self.progress}vw`,
                duration: 0.5,
                ease: "power3.out",
            });
        },
        markers: true
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
    <div style="position: relative;">
        <div class="container h-[150vh] md:h-[200vh]">
            <nav>
                <!-- <a href="#">{{ info }}</a> -->
            </nav>

            <section class="wrapper-404">
                <h1 class="text-[#242625] dark:text-[#fff]">page not found</h1>

                <div class="card" id="card-1">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
                </div>
                <div class="card" id="card-2">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
                </div>
                <div class="card" id="card-3">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
                </div>
                <div class="card" id="card-4">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
                </div>
            </section>
            <section class="outro">
                <!-- <slot/> -->
            </section>
        </div>
    </div>
    


    <!-- <div class="flex justify-center h-[100svh] w-full bg-white selection:bg-[#F7CAC9] selection:text-[#495d81] transition-all ease-in-out duration-1000
    p-[15%] md:p-[5%] *:font-Inter *:text-lg *:tracking-wide">
        <p class="md:w-[50svw]">
            
        </p>
    </div> -->
    
</template>

<style scoped>

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
    font-size: 48vw;
    font-weight: 400;
    text-align: center;
    margin: 0;
}

.container {
    width: 100%;
    /* height: 200vh; Tricky for the next component */
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
    left: 20%;
}

#card-2{
    top: 25%;
    left: 40%;
}

#card-3{
    top: 45%;
    left: 60%;
}

#card-4{
    top: 15%;
    left: 80%;
}

.outro {
    position: absolute;
    top: 150vh;
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