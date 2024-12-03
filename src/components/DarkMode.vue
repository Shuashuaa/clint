<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const darkMode = ref(document.body.classList.contains('dark'));

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
};

watchEffect(() => {
    document.body.classList[darkMode.value ? 'add' : 'remove']('dark');
});

</script>

<template>
    <i class="cursor-pointer" @click="toggleDarkMode" :class="[darkMode ? 'pi pi-sun' : 'pi pi-moon']"></i>
</template>