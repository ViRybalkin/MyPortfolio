<template >
  <div class="app-container">
   <router-view name="header"/>
   <router-view />
  </div>
</template>

<script>

export default {

};
</script>

<style lang="postcss" >
@import "normalize.css";
@import "../styles/mixins";
@import "../styles/layout/base";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
</style>

<style scoped src="./app.pcss"></style>