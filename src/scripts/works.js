import Vue from "vue";
import axios from "../admin/request";
import config from "../../env.paths";

axios.defaults.baseURL = config.BASE_URL;

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs",
};
const btns = {
  template: "#preview-btns",
  data() {
    return {
      disabled: false,
    };
  },
};

const display = {
  props: ["currentWork", "works", "currentIndex"],
  template: "#preview-display",
  components: {
    thumbs: thumbs,
    btns: btns,
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.slice(0, 3).reverse();
    },
  },
};
const tags = {
  props: ["tags"],
  template: "#preview-tag",
};
const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {
    tags: tags,
  },
  computed: {
    tagsArray() {
      return this.currentWork.techs.split(",");
    },
  },
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: {
    display,
    info,
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[0];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoop(value);
    },
  },
  methods: {
    makeInfiniteLoop(index) {
      const worksNumber = this.works.length - 1;
      if (index < 0) this.currentIndex = worksNumber;
      if (index > this.works.length - 1) this.currentIndex = 0;
    },
    // transform(){
    //   this.works.map(item =>{
    //     item.image = config.BASE_URL + item.photo
    //     item.tags = item.techs.split(', ')
    //     item.name = item.title
    //   })
    // },
    // requireImagesToArray(data) {
    //   return data.map((item) => {
    //     const requiredImage = require(`../images/content/slider/${item.photo}`)
    //       .default;
    //     item.photo = requiredImage;
    //     return item;
    //   });
    // },
    slide(direction) {
      const lastItem = this.works[this.works.length - 1];
      switch (direction) {
        case "next":
          this.works.push(this.works[0]);
          this.works.shift();
          this.currentIndex++;
          break;
        case "prev":
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--;
          break;
      }
    },
  },
  async created() {
    const {
      data: { user },
    } = await axios.get("/user");
    const { data } = await axios.get(`/works/${user.id}`);
    console.log(data);

    this.works = data.map((item) => {
      item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
      item.tags = item.techs.split(", ");
      item.name = item.title;
      return item;
    });
  },
});
