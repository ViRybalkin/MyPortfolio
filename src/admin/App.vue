<template >
  <div class="app-container">
    <headline title="Панель администрирования">
      <user />
    </headline>
    <navigation />
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
import user from "./components/user/user";
import headline from "./components/headline/headline";
import navigation from "./components/navigation/navigation";
import button from "./components/button";
import category from "./components/categoty/category";
export default {
  components: {
    headline,
    user,
    navigation,
    iconedButton: button,
    category,
  },
  data() {
    return {
      categories: [],
      emptyCatisShow: false,
    };
  },
  created() {
    this.categories = require("./data/categories.json");
  },
};
</script>

<style lang="postcss" >
@import "normalize.css";
@import "../styles/mixins";
@import "../styles/layout/base";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
</style>

<style scoped src="./app.pcss"></style>