import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
          480: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
  computed: {
    slider() {
      return this.$refs["slider"].$swiper;
    },
  },
  methods: {
    requireImagetoArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.avatar}`)
          .default;
        item.avatar = requiredImage;
        return item;
      });
    },
    slide(direction) {
      switch (direction) {
        case "next":
          this.slider.slideNext();
          break;
        case "prev":
          this.slider.slidePrev();

          break;
      }
    },
  },
  created() {
    const data = require("../data/review.json");
    this.reviews = this.requireImagetoArray(data);
  },
});
