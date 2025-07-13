<script setup>
defineProps({
    user:Object
})
</script>

<template>
    <div class="card m-2 bg-slate-200 w-96 shadow-sm">
  <figure>
    <img
      v-bind:src="user.picture.large"
      alt="userpicture" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{{user.name.first}} {{user.name.last}}</h2>
    <p>{{ user.email }}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
</template>