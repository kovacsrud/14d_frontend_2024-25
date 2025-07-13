<script setup>
import {ref, onMounted} from "vue";
import Post from "./Post.vue";

const posts=ref([]);

const fetchPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(adat=>posts.value=adat)
    .catch(err=>alert(err));
}
onMounted(fetchPosts);
</script>

<template>
    <h2 class="text-center">Posztok száma:{{ posts.length }}</h2>
    
    <div class="flex flex-row flex-wrap items-center justify-center">
        <div  v-for="post in posts">
            <Post :post="post" />
        </div>
    </div>
</template>