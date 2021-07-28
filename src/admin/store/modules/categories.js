export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
  },
  mutations: {
    SET_LOADING: (state, value) => (state.isLoading = value),
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORIES(state, category) {
      category.skills = [];
      state.data.unshift(category);
    },
    REMOVE_CATEGORY: (state, categoryIdToRemove) => {
      state.data = state.data.filter(
        (category) => category.id !== categoryIdToRemove
      );
      return state.data;
    },
    ADD_SKILL: (state, newSkill) => {
      state.data = state.data.map((category) => {
        if (category.id === newSkill.category) category.skills.push(newSkill);
        return category;
      });
    },
    REMOVE_SKILL: (state, skillToRemove) => {
      state.data = state.data.map((category) => {
        if (category.id === skillToRemove.category) {
          category.skills = category.skills.filter(
            (skill) => skill.id !== skillToRemove.id
          );
        }
        return category;
      });
    },
    EDIT_SKILL: (state, skillToEdit) => {
      const editSkillInCategory = (category) => {
        category.skills = category.skills.map((skill) => {
          return skill.id === skillToEdit.id ? skillToEdit : skill;
        });
      };

      const findCategory = (category) => {
        if (category.id === skillToEdit.category) {
          editSkillInCategory(category);
        }
        return category;
      };
      state.data = state.data.map(findCategory);
    },
  },
  actions: {
    async create({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORIES", data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async fetch({ commit }) {
      commit("SET_LOADING", true);
      try {
        const {
          data: { user },
        } = await this.$axios.get("/user");
        const { data } = await this.$axios.get(`/categories/${user.id}`);
        commit("SET_CATEGORIES", data);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
      }
    },
    async remove({ commit }, categoryId) {
      try {
        const { data } = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
