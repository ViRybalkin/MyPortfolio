<template >
  <div class="app-container">
    <headline title="Панель администрирования">
      <user/>
    </headline>
    <navigation/>
  </div>
</template>

<script>
import user from './components/user/user'
import headline from './components/headline/headline'
import navigation from './components/navigation/navigation'
export default{
  components:{
    headline,
    user,
    navigation
    }
  }
</script>

<style lang="postcss" >
  @import "normalize.css";
  @import "../styles/mixins";
  @import "../styles/layout/base";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
</style>

<style scoped src="./app.pcss"></style>