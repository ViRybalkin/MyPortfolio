<template >
  <div class="app-container">
    <headline title="Панель администрирования">
      <user/>
    </headline>
    <navigation/>
    <div class="page-content">
     <div class="container-content">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
           <iconed-button type="iconed" @click="onClick" title="Добавить группу" />
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import user from './components/user/user'
import headline from './components/headline/headline'
import navigation from './components/navigation/navigation'
import button from './components/button'
export default{
  components:{
    headline,
    user,
    navigation,
    iconedButton:button
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