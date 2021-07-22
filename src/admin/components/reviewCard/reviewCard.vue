<template>
  <card simple>
    <div class="header">
      <user :title="review.author" :subtitle="review.occ" :src="cover"></user>
    </div>
    <div class="content">
      <div class="text text-review">
        <p>{{ review.text }}</p>
      </div>
      <div class="bottom-line">
        <icon symbol="pencil" title="Править"></icon>
        <icon symbol="cross" title="Удалить"></icon>
      </div>
    </div>
  </card>
</template>

<script>
import card from "../card";
import icon from "../icon";
import user from "../user";

export default {
  components: { card, icon, user },
  props: {
    review: {
      type: Object,
      default: () => ({}),
    },
    emptyCardIsShown: {
      type: Boolean,
    },
  },
  data() {
    return {
      currentReview: {
        id: "",
        author: "",
        occ: "",
        text: "",
        preview: "",
      },
    };
  },
};
</script>

<style scoped lang="postcss" src="./reviewCard.pcss"></style>

