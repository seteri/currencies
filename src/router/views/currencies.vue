<script setup>
import { useStore } from "vuex"
import { ref, onMounted } from 'vue'
let isLoaded = ref(false)
let showAllCurrencies = ref(false)
let status = ref("show more")
const store = useStore()
let count = ref(0)

onMounted(() => {
  store.dispatch("fetchData")
  setTimeout(() => {
    console.log(store.state.currencies.info[0].currencies)
    isLoaded.value = true

  }, 700);

})
const showMore = () => {
  showAllCurrencies.value = !showAllCurrencies.value
  count.value++
  if (count.value % 2 != 0) {
    status.value = "show less"
  }
  else {
    status.value = "show more"
  }
}

</script>

<template>
  <thead>
    <tr>
      <th class="table">ვალუტა</th>
      <th class="table">რაოდენობა</th>
      <th class="table">გაცვლითი კურსი</th>

    </tr>
  </thead>
  <tr v-if="isLoaded" v-for="price, index in store.state.currencies.info[0].currencies" :key="index">
    <td v-if="showAllCurrencies || index < 5" class="price">{{ price.code }}</td>
    <td v-if="showAllCurrencies || index < 5" class="price">{{ price.quantity }}</td>
    <td v-if="showAllCurrencies || index < 5" class="price">{{ price.rate }}</td>
  </tr>
  <button @click="showMore">{{ status }}</button>

  <RouterView />
</template>

<style scoped>
.table {
  padding: 20px;
}

.price {
  padding: 20px;
}
</style>
