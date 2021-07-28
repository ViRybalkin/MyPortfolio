export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    ADD_WORK(state, newWork) {
      state.data.push(newWork);
    },
    SET_WORKS(state, works) {
      state.data = works;
    },
    REMOVE_WORKS(state, id) {
      state.data = state.data.filter((item) => item.id !== id);
    },
  },
  actions: {
    async add({ commit }, newWork) {
      const formData = new FormData();

      Object.keys(newWork).forEach((item) => {
        formData.append(item, newWork[item]);
      });

      try {
        const { data } = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log("error");
      }
    },

    async fetch({ commit }) {
      try {
        const {
          data: { user },
        } = await this.$axios.get(`/user`);
        const { data } = await this.$axios.get(`/works/${user.id}`);
        commit("SET_WORKS", data);
      } catch (error) {
        console.log("error");
      }
    },
    async remove({ commit, dispatch }, id) {
      try {
        const { data } = await this.$axios.delete(`/works/${id}`);
        commit("REMOVE_WORKS", id);
        dispatch(
          "tooltips/show",
          {
            text: "Работа удалена",
            type: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch(
          "tooltips/show",
          {
            text: "Работа не удалена" + error,
            type: "error",
          },
          { root: true }
        );
        console.log("error");
      }
    },
  },
};
