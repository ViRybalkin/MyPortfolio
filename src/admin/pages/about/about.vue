<template>
  <div class="about-page-component">
    <div class="page-content">
      <div class="container-content" v-if="categories.length">
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
            <category
              @remove="!emptyCatisShow"
              @approve="createCategory"
              empty
            />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category
             :title="category.category" 
             :skills="category.skills" 
             @edit-skill="editSkill"
             @remove-skill="removeSkill"
             @create-skill="createSkill($event,category.id)"
             />
          </li>
        </div>
      </div>
      <div class="container-content-loading" v-else>
      <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import button from "../../components/button";
import category from "../../components/categoty/category";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedButton: button,
    category,
  },
  data() {
    return {
      emptyCatisShow: false,
    };
  },
  computed: {
    ...mapState("categories", {
      categories: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      addSkillAction:"skills/add",
      removeSkillAction:"skills/remove",
      editSkillAction:"skills/edit"
    }),
    async createSkill(skill,categoryId){
      const newSkill = {
        ...skill,
        category:categoryId
      }
      await this.addSkillAction(newSkill)
      skill.title = '',
      skill.percent = ''
    },
    removeSkill(skill){
      this.removeSkillAction(skill)
    },
    async editSkill(skill){
      await this.editSkillAction(skill)
      skill.editmode = false;
    },
   
   async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatisShow = false;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    this.fetchCategoriesAction();
  },
};
</script>

<style scoped src="./about.pcss"></style>
