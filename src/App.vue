<template>
  <div id="app">
    <navbar />
    <router-view/>
    <bottom-info />
  </div>
</template>

<script>
import navbar from '@/components/navBar/NavBar';
import BottomInfo from '@/components/bottomInfo/BottomInfo';
export default {
  name: 'App',
  components: { navbar, BottomInfo },
};
</script>

<style>
@import '../src/assets/Global.css';  
</style>
