<script setup>
import {  ref,onMounted } from 'vue'
import { useStore } from "vuex"

let isLoaded = ref(false)
let currencies1 = ref("")
let raodenoba = ref()
const store = useStore()
onMounted(() => {
    store.dispatch("fetchData")
  setTimeout(() => {
    console.log(store.state.currencies.info[0].currencies)
    isLoaded.value = true

  }, 1000);


  
})

</script>

<template>
    <input type="text" v-model="raodenoba">
<select v-if="isLoaded" v-model="currencies1">
  <option v-for="name in store.state.currencies.info[0].currencies" :value="{name: name.code, price:name.rate/name.quantity}">{{ name.code }}</option>
</select>

to GEL
<p>{{ raodenoba*currencies1.price }}</p>

</template>