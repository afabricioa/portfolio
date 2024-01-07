<script setup>
  // import NavBar from '@/components/NavBar.vue';
  import TheDashboard from '@/components/TheDashboard.vue';
// import { ref } from 'vue';

  // const secao = ref("");

  // function handleSecao(valor){
  //   console.log(valor);
  //   secao.value = valor;
  // }

</script>

<template>
  <!-- <header>
    <NavBar @scroll-to-secao="handleSecao"/>
  </header> -->
  <main>
    <TheDashboard/>
  </main>
</template>

<style>

  header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 12vh;
    background-color: #282828;
  }

  main{
    width: 100%;
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    margin-top: 80px;
  }

</style>