<template>
    <div>
        <p>Basic Grab and Scroll Slider</p>

        <div class="items" ref="slider" @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp" @mousemove="handleMouseMove" @wheel="handleMouseWheel">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
            <div class="item item4"></div>
            <div class="item item5"></div>
            <div class="item item6"></div>
            <div class="item item7"></div>
            <div class="item item8"></div>
            <div class="item item9"></div>
            <div class="item item10"></div>
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

.items {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    transform: scale(0.98);
    will-change: transform;
    user-select: none;
    cursor: pointer;
}

.items.active {
    background: rgba(255,255,255,0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
}

.item {
    display: inline-block;
    background: skyblue;
    min-height: 250px;
    min-width: 400px;
    margin: 2em 1em;
    @media screen and (max-width: 500px) {
        min-height: 200px;
        min-width: 200px;
    }
}
</style>