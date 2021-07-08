<template>
  <div class="avatar-component">
    <div class="image">
      <img v-bind="$attrs" alt="user picture" />
    </div>
    <div class="username">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    size: {
      type: String,
      default: "3",
    },
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}rem`,
        height: `${size}rem`,
      };
    },
  },
};
</script>
<style lang="postcss" scoped src="./avatar.pcss"></style>
