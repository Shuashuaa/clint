<script setup lang="ts">
import { ref, computed } from 'vue';
import Footer from '@/components/Footer.vue';

const data = ref([
    { id: 1, type: "1", name: 'oil', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'},
    { id: 2, type: "1", name: 'shoes1', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'},
    { id: 3, type: "1", name: 'white bag', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'},
    { id: 4, type: "1", name: 'decoration', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'},
    { id: 5, type: "1", name: 'watch', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'},
    { id: 6, type: "1", name: 'shoes2', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'},
    { id: 7, type: "1", name: 'curology', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'},
    { id: 8, type: "1", name: 'white bag 2', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'},
    { id: 9, type: "1", name: 'lantern', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'},
    { id: 10, type: "2",  name: 'tonik', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'},
    { id: 11, type: "2", name: 'handheld', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'},
    { id: 12, type: "2", name: 'black bag', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'}
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

const order = ref('');

const handleClick = (term: string) => {
    // console.log(term)
    order.value = term
}

const sortJob = computed(() => {
    return [...data.value].sort((a: any, b: any) => {
        return a[order.value] > b[order.value] ? 1 : -1;
    })
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
    <div class="mt-12 md:mt-[120px] bg-white dark:bg-[#242625] flex flex-col justify-center items-center relative transition-all ease-in-out duration-1000 
    *:font-Inter"
    >
        <h1 class="text-[#242625] dark:text-white text-center py-10 text-3xl">My Work</h1>
        
        <div v-if="isCategoriesOn" class="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button @click="handleClick('')" type="button" class="text-[#4e1d1c] hover:text-white border border-[#4e1d1c] bg-white hover:bg-[#4e1d1c] focus:ring-4 focus:outline-none focus:ring-[#4e1d1c] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-200 dark:text-blue-200 dark:hover:text-black dark:hover:bg-blue-200 dark:bg-gray-900 dark:focus:ring-blue-200">All categories</button>
            <button @click="handleClick('name')" type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Name</button>
            <button @click="handleClick('type')" type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Type</button>
            <!-- <button @click="handleClick('electronics')" type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
            <button @click="handleClick('gaming')" type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button> -->
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

        <!-- <transition-group name="list" tag="div" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; ">
            <div v-for="job in sortJob" :key="job.id" style="width: 300px;">
                <div style="border: 1px solid; border-radius: 10px; margin: 10px; height: 200px; padding: 30px;">
                    <h1 style="margin: 0; font-size: 24px;">
                        {{ job.title }} in {{ job.location }}
                    </h1>
                    <h3>{{ job.salary }} pesos</h3>
                    <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </div>
                
            </div>
        </transition-group> -->

        <div class="container">
            <transition-group name="list" tag="div" class="align-center grid grid-cols-2 sm:grid-cols-4 gap-4"> 
                <div v-for="item in sortJob.slice(0, limit || data.length)" :key="item.id">
                    <img class="h-full w-full rounded-lg object-cover" :src="item.image" :alt="item.name">
                </div>
            </transition-group>

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

    <Footer email="Jaderhin-Clint@sample.com"/>
</template>

<style>
.list-move{
    transition: all 1s;
}
</style>