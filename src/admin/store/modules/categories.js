export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORIES: (state, category) => state.data.unshift(category),
  },
  actions: {
    async create({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORIES", data);
      } catch (error) {
        throw new Error("произошла ошибка");
      }
    },
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get("/categories/468");
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
