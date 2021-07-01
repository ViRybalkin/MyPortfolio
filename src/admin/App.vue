<template >
  <headline title="Панель управления">
    <avatar 
    title="Виталий Рыбалкин"
    src="https://picsum.photos/300/300"
    />
  </headline>
</template>

<script>
import avatar from './components/avatar/avatar.vue'
import headline from './components/headline/headline.vue'
export default{
  components:{
    avatar,headline
    }
  }
</script>