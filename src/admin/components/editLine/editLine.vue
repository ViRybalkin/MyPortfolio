<template>
  <div class="edit-line-component" :class="{ blocked: blocked }">
    <div class="title" v-if="!editmode">
      <div class="text">{{ value }}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
          placeholder="Название новой группы"
          :value="value"
          :errorMessage="errorText"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="$emit('remove', $event)"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../../components/icon/icon.vue";
import appInput from "../input/input";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
export default {
  mixin: [ValidatorMixin],
  validators: {
    title: (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    errorText: {
      type: String,
      default: "",
    },
    editModeByDefault: Boolean,
    blocked: Boolean,
  },
  components: {
    appInput,
    Validator,
    icon,
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      title: this.value,
    };
  },
  methods: {
    onApprove() {
      if (this.value.trim() === "") {
        this.errorText = "Не может быть пустым";
        return false;
      }
      if (this.title.trim() == this.value.trim()) {
        this.editmode = false;
      } else {
        this.$emit("approve", this.value);
        this.title = this.value.trim();
      }
    },
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input"),
  },
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>