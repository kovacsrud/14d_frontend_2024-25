<script setup>
import {ref, onMounted} from "vue";
import Randomuser from "./Randomuser.vue";
const users=ref([]);

const fetchUsers=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
    .then(adat=>users.value=adat.results)
    .catch(err=>alert(err));
}
onMounted(fetchUsers);
</script>


<template>
     <h2 class="text-center">Userek száma:{{ users.length }}</h2>
    
    <div class="flex flex-row flex-wrap items-center justify-center">
        <div  v-for="user in users">
          <Randomuser :user="user" />
        </div>
    </div>
</template>