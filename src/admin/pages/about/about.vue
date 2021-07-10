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
              @remove="deleteCategory(category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill"
              @create-skill="createSkill($event, category.id)"
            />
          </li>
        </div>
      </div>
      <div class="container-content" v-else>
        <div class="container-content-loading">
          <div class="loader"></div>
        </div>
        <h1 class="loading__title">Loading..</h1>
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
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
      removeCategory: "categories/remove",
    }),
    async createSkill(skill, categoryId) {
      const newSkill = {
        ...skill,
        category: categoryId,
      };
      await this.addSkillAction(newSkill);
      (skill.title = ""), (skill.percent = "");
    },
    removeSkill(skill) {
      this.removeSkillAction(skill);
    },
    async editSkill(skill) {
      try {
        await this.editSkillAction(skill);
        skill.editmode = false;
      } catch (error) {
        console.log(error.message);
      }
    },

    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatisShow = false;
      } catch (error) {
        console.log(error.message);
      }
    },
    async deleteCategory(categoryId) {
      try {
        await this.removeCategory(categoryId);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  async created() {
    try {
      await this.fetchCategoriesAction();
    } catch (error) {
      console.log(error.message);
    }
  },
};
</script>

<style scoped src="./about.pcss"></style>
