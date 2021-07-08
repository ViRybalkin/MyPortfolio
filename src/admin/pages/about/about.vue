<template>
<div class="about-page-component">
    <div class="page-content">
      <div class="container-content">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button
            type="iconed"
            v-if="!emptyCatisShow" 
            @click="emptyCatisShow = true"
            title="Добавить группу"
          />
        </div>
       
        <div class="skills">
          <li class="item" v-if="emptyCatisShow">
            <category @remove="!emptyCatisShow" empty />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category :title="category.category" :skills="category.skills" />
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import button from "../../components/button";
import category from "../../components/categoty/category";

export default ({
  components:{
    iconedButton: button,
    category,
  },
  data(){
    return{
      categories: [],
      emptyCatisShow: false,
    }
  },
   created() {
    this.categories = require("../../data/categories.json");
  },
})
</script>

<style scoped src="./about.pcss"></style>
