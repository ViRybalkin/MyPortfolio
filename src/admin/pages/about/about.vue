<template>
  <div class="about-page-component">
    <div class="page-content">
      <div class="container-content">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button
            type="iconed"
            v-if="emptyCatisShow === false"
            @click="emptyCatisShow = true"
            title="Добавить группу"
          />
        </div>
        <div class="skills">
          <li class="item" v-if="emptyCatisShow">
            <category
              @remove="emptyCatisShow = false"
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
      <div class="container-content" v-if="isLoading">
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
import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedButton: button,
    category: () => import("../../components/categoty"),
  },
  data() {
    return {
      emptyCatisShow: false,
    };
  },
  computed: {
    ...mapState("categories", {
      isLoading: (state) => state.isLoading,
      categories: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      removeCategory: "categories/remove",
      addSkillAction: "skills/add",
      editSkillAction: "skills/edit",
      removeSkillAction: "skills/remove",
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
        throw new Error(error);
      }
    },

    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatisShow = false;
      } catch (error) {
        throw new Error(error);
      }
    },
    async deleteCategory(categoryId) {
      try {
        await this.removeCategory(categoryId);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  async created() {
    await this.fetchCategoriesAction();
  },
};
</script>

<style scoped src="./about.pcss"></style>
