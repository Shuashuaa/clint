<script setup lang="ts">
import { ref, computed } from 'vue';
import Footer from '@/components/Footer.vue';

const data = ref([
    { id: 1, name: 'oil', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'},
    { id: 2, name: 'shoes1', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'},
    { id: 3, name: 'white bag', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'},
    { id: 4, name: 'decoration', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'},
    { id: 5, name: 'watch', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'},
    { id: 6, name: 'shoes2', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'},
    { id: 7, name: 'curology', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'},
    { id: 8, name: 'white bag 2', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'},
    { id: 9, name: 'lantern', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'},
    { id: 10, name: 'tonik', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'},
    { id: 11, name: 'handheld', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'},
    { id: 12, name: 'black bag', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'}
]);

const props = defineProps({
    isCategoriesOn: {
        type: Boolean,
        default: true
    },
    showSeeMore: {
        type: Boolean,
        default: false
    },
    limit: Number,
})

// set a starting point where the email data comes from

// const chunkedData = computed(() => {
//     const chunks = [];
//     for (let i = 0; i < data.value.length; i += 3) {
//         chunks.push(data.value.slice(i, i + 3));
//     }
//     return chunks;
// });

</script>

<template>
    <div class="bg-white dark:bg-[#242625] flex flex-col justify-center items-center relative transition-all ease-in-out duration-1000 
    *:font-Inter"
    >
        <h1 class="text-[#242625] dark:text-white text-center py-10 text-3xl">My Work</h1>
        
        <div v-if="isCategoriesOn" class="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
            <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
            <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
            <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
            <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
        </div>
        <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <template v-for="(row, rowIndex) in chunkedData" :key="rowIndex">
                <div class="grid gap-4">
                    <template v-for="(item, imageIndex) in row" :key="imageIndex">
                        <div v-if="imageIndex < 3">
                            <img class="h-auto w-auto rounded-lg" :src="item.image" :alt="item.name">
                        </div>
                    </template>
                </div>
            </template>
        </div> -->

        <div class="container">
            <div class="align-center grid grid-cols-2 sm:grid-cols-4 gap-4"> 
                <div v-for="item in data.slice(0, limit || data.length)" :key="item.id">
                    <img class="h-full w-full rounded-lg object-cover" :src="item.image" :alt="item.name">
                </div>
            </div>

            <!-- masonry -->
            <!-- <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div class="grid gap-4">
                    <div>
                    <img
                        class="h-auto max-w-full rounded-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                        alt="gallery-photo"
                    />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center "
                            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                            alt="gallery-photo"
                        />
                        </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center "
                            src="https://docs.material-tailwind.com/img/team-3.jpg"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center "
                            src="https://docs.material-tailwind.com/img/team-3.jpg"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            class="h-auto max-w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                            alt="gallery-photo"
                        />
                    </div>
                </div>
            </div> -->
        </div>

        <a href="/projects" v-if="showSeeMore" class=" absolute text-center align-center z-10 w-full p-[100px] text-lg text-shadow-lg text-white bottom-0 bg-gradient-to-t from-[#070707] via-[rgba(44,44,44,0.8)] hover:via-[rgba(44,44,44,0.85)] to-transparent
        *:hover:tracking-wider *:transition-all *:ease-in-out *:duration-500 *:hover:text-xl">
            <p>see more</p>
        </a>

    </div>

    <Footer email="Jaderhin-Clint@sample.google.com"/>
</template>