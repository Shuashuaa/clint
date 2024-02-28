<template>
    <div class="nav">
        <div class="initial_display">
            <!-- Insert your cool looking icons here -->
            <!-- <img src="cool_icon.png" alt="Cool Icon"> -->
            <h1>...</h1>
        </div>
        <div class="display_after_hovering">
            <!-- Profile details will appear here -->
            <h1>hi!</h1>
            <div style="display: flex; flex-direction: column;">
                <button>Gallery</button>
                <button>Products</button>
                <button>Info</button>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <button>Contact</button>
                <button>Social</button>
            </div>
            
        </div>
    </div>

    <div class="items" ref="slider" style="height: 100vh; overflow-x: hidden;" 
        @mousedown="handleMouseDown" 
        @mouseleave="handleMouseLeave" 
        @mouseup="handleMouseUp" 
        @mousemove="handleMouseMove" 
        @wheel="handleMouseWheel"
    >   
        
        <div class="bg" style="width: 100vw; height: 100vh;">
            
            <div style="position: relative; display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh;">
                <div class="title-container">
                    <h1 class="title">Jean Loup Boudreaux.</h1>
                    <button>Instagram</button>
                    <button>Twitter</button>
                    <button>Facebook</button>
                </div>
                <div class="blob" ref="blob"></div>
            </div>

            <button>asdasd</button>
            
        </div>

        <div style="width: 100vw; height: 100vh;">
            
            <div style="padding: 0 80px; display: flex; justify-content: space-around; align-items: start; flex-direction: column; width: 20vw; height: 100vh;">
                <h1 class="font">Gallery</h1>
                <div>
                    <p class="subtitle">You can tap and select the artwork to see it's details.</p>
                    <p class="subtitle">for pack orders, you'll get the whole thing without duplicates and a chance of getting the limited piece.</p>
                </div>
                <p class="font">know more about the artist</p>
                
            </div>
            <hr>
            
        </div>

        <div class="item-container">
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://sep.turbifycdn.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg?t=1678352599&" alt="">
                <p style="text-align: end;">Starry Night</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://www.boredpanda.com/blog/wp-content/uploads/2021/12/famous-paintings-19-61c97644e8cae__700.jpg" alt="">
                <p style="text-align: end;">Las Meninas</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://sep.turbifycdn.com/ty/cdn/madisonartshop/most-famous-paintings-11.jpg?t=1678352599&" alt="">
                <p style="text-align: end;">The Night Watch</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://sep.turbifycdn.com/ty/cdn/madisonartshop/most-famous-paintings-12.jpg?t=1678352599&" alt="">
                <p style="text-align: end;">The Kiss</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://cdn.thecollector.com/wp-content/uploads/2022/03/michelangelo-adam-god-close-up.jpg?width=1400&quality=55" alt="">
                <p style="text-align: end;">The Creation of Adam</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://nolisoli.ph/wp-content/uploads/2018/08/IMG_3654.jpg" alt="">
                <p style="text-align: end;">Spolarium</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/The_Battle_of_Lepanto_of_1571_full_version_by_Juan_Luna.jpg" alt="">
                <p style="text-align: end;">Naval Battle of Lepanto</p>
            </div>
            <div class="item" style="display: flex; flex-direction: column; height: 100px; width: 100px;">
                <img draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1200px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg" alt="">
                <p style="text-align: end;">A Sunday Afternoon on the Island of La Grande</p>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';

	const slider = ref(null);
	const isDown = ref(false);
	const startX = ref(0);
	const scrollLeft = ref(0);

	const handleMouseDown = (e) => {
		isDown.value = true;
		slider.value.classList.add('active');
		startX.value = e.pageX - slider.value.offsetLeft;
		scrollLeft.value = slider.value.scrollLeft;
	};

	const handleMouseLeave = () => {
		isDown.value = false;
		slider.value.classList.remove('active');
	};

	const handleMouseUp = () => {
		isDown.value = false;
		slider.value.classList.remove('active');
	};

	const handleMouseMove = (e) => {
		if (!isDown.value) return;
		e.preventDefault();
		
		const x = e.pageX - slider.value.offsetLeft;
		const walk = (x - startX.value) * 3; //scroll-fast
		slider.value.scrollLeft = scrollLeft.value - walk;
	};

	const handleMouseWheel = (e) => {
		e.preventDefault();
		slider.value.scrollLeft += e.deltaY;
	};
</script>

<style>

body {
	overflow-y: hidden;
    padding: 0;
    margin: 0;
}

.item-container{
    z-index: 1;
    display: flex; 
    justify-content: center;
    /* margin-left: -40vw; */
    height: 80vh;
    align-self: center;
    align-items: center;
}

.items {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    /* transform: scale(0.98); */
    /* will-change: transform; */
    user-select: none;
    cursor: pointer;
}

.items.active {
    /* background: rgba(126, 109, 109, 0.3); */
    cursor: grabbing;
    cursor: -webkit-grabbing;
    /* transform: scale(2); */
}

.item {
    /* display: inline-block; */
    background: skyblue;
    height: 50vh;
    min-height: 300px;
    min-width: 400px;
    margin: 2em 1em;
    position: relative; /* Add this to make absolute positioning work */
    /* overflow: hidden; Ensure content overflow is hidden */
    @media screen and (max-width: 500px) {
        min-height: 200px;
        min-width: 200px;
    }
}

.item:nth-child(odd) {
    align-self: start;
}

.item:nth-child(even) {
    align-self: end;
}

.item img {
    position: absolute; /* Position the image absolutely */
    top: 0; /* Position from the top */
    left: 0; /* Position from the left */
    width: 100%; /* Cover the entire width of the parent container */
    height: 100%; /* Cover the entire height of the parent container */
    object-fit: cover; /* Maintain aspect ratio while covering */
}

.item p {
    position: absolute; /* Position the paragraph absolutely */
    bottom: 10px; /* Adjust the bottom position as needed */
    right: 10px; /* Adjust the right position as needed */
    margin: 0; /* Remove any default margin */
    background: rgba(255, 255, 255, 0.5); /* Example background color with transparency */
    padding: 5px; /* Example padding */
}

.blob {
  position: absolute;
  opacity: 0.5;
  width: clamp(150px, 50%, 400px);
  aspect-ratio: 1/1;
  animation: animate 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite
    alternate forwards;
  filter: blur(40px);
  z-index: -3;
  background: linear-gradient(
    47deg,
    rgba(255, 88, 139, 1) 21%,
    rgb(0 164 173) 67%,
    rgba(118, 74, 166, 1) 81%
  );
}

@keyframes animate {
  0% {
    translate: 40% -25%;
    border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
  }
  50% {
    translate: 30% -27%;
    border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
    rotate: 41deg;
    scale: 1;
  }
  100% {
    translate: 35% -30%;
    border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
    rotate: -60deg;
    scale: 1.05;
  }
}

.font{
    font-family: "Sansita", sans-serif !important;
    font-weight: 700 !important;
    font-style: italic !important; 
}

.title {
    font-family: 'Sansita', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: clamp(3rem, 3vw, 5.625rem); /* Using clamp for fluid font-size */

    @media screen and (max-width: 568px) {
        font-size: 50px;
        /* color: blue; */
    }

    @media screen and (min-width: 569px) and (max-width: 768px) {
        font-size: 50px;
        /* color: green; */
    }

    @media screen and (min-width: 769px) {
        font-size: 72px;
        /* color: red; */
    }
}

.title-container{
    position: absolute;
    text-align: center;
    white-space: initial;
    color: #F5F5F5;
}

.subtitle{
    position: relative;
    text-align: start;
    white-space: initial;
    font-family: "Sansita", sans-serif !important;
    font-weight: 400 !important;
    font-style: italic !important;
    /* font-size: clamp(3rem, -0.2813rem + 10.5vw, 5.625rem); */
    font-size: 14px;
    color: #141414;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
}

.nav{
    position: absolute; 
    z-index: 2; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    width: 50px; 
    background-color: #f5f5f5;
    overflow: hidden;
    transition: width ease-in-out 0.7s;
}

.nav:hover {
    width: 250px;
}

.display_after_hovering {
    height: 100vh;
    display: none; /* Initially hide */
}

.nav:hover .display_after_hovering {
    display: flex; /* Display after hovering */
    flex-direction: column;
    justify-content: space-around; 
}

.nav:hover .initial_display {
    display: none; /* Display after hovering */
}


</style>
