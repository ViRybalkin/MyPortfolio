<template>
  <section class="works-page-component">
    <div class="page-content">
      <div class="container-content">
        <div class="header">
          <div class="title">Блок "Отзывы"</div>
        </div>
        <div class="form-component">
          <ul class="works-cards">
            <li v-if="emptyCardIsShown" class="li-form">
              <form-review
                class="form"
                :currentReview="currentReview"
                @close="closeHandler"
                @click="handleClick"
              />
            </li>
            <li v-else class="empty-work">
              <square-btn
                v-if="emptyCardIsShown == false"
                type="square"
                title="Добавить отзыв"
                @click="emptyCardIsShown = true"
              />
            </li>
            <li class="item" :emptyCardIsShown="emptyCardIsShown"></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import formReview from "../../components/formReview/formReview";
import reviewCard from "../../components/reviewCard";

import card from "../../components/card";
import icon from "../../components/icon";
import iconedBtn from "../../components/button/button";
import squareBtn from "../../components/button/button";

export default {
  components: {
    formReview,
    reviewCard,
    card,
    icon,
    iconedBtn,
    squareBtn,
  },
  data() {
    return {
      emptyCardIsShown: false,
      currentReview: null,
    };
  },
  methods: {
    handleClick() {
      if (this.reviews.status == 1) {
        this.emptyCardIsShown = false;
      }
    },
    editHandler(review) {
      this.currentReview = { ...review };
      this.emptyCardIsShown = true;
    },
    closeHandler() {
      this.emptyCardIsShown = false;
    },
  },
  watch: {
    emptyCardIsShown() {
      if (!this.emptyCardIsShown) {
        this.currentReview = null;
      }
    },
  },
};
</script>
<style lang="postcss" src="./review.pcss" scoped>
</style>

