<script setup>
defineProps({post:Object});

</script>


<template>
    <div class="card bg-slate-400 text-white m-3 w-96">
  <div class="card-body">
    <h2 class="card-title">{{post.title}}</h2>
    <p>{{ post.body }}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
</template>