<script setup>

</script>

<template>
  <div class="header">
    <RouterLink to="/calculator">Calculator</RouterLink>
    <RouterLink to="/">Currencies</RouterLink>
  </div>
  
  
  <RouterView/>
</template>

<style scoped>
  .header{
    background-color: bisque;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    
  }
  a:-webkit-any-link {
    color: black;
    cursor: pointer;
    text-decoration: none;
}
a{
  font-size: 30px;
  padding-left: 50px;

}
</style>
