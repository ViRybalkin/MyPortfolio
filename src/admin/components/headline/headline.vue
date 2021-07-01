<template >
  <div class="headline-component">
     <div class="container">
        <slot />
        <div class="title">{{title}}</div>
        <div class="btns">
          <button type="button" @click="$emit('change','logout')" class="btn">Выйти</button>
        </div>
     </div>
  </div>
</template>
<script>
  export default{
    props:{
      title: String,
  }
}
</script>

<style lang="pcss" scoped src="./headline.pcss"></style>