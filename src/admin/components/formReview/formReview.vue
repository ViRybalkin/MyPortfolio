<template>
  <form class="form" @submit.prevent="handleSubmit">
    <card>
      <h1 slot="title">Добавить отзыв</h1>
      <div class="form-container" slot="content">
        <div class="form-cols">
          <div class="w-30p">
            <div class="label-block">
              <label
                :style="{ backgroundImage: `url(${newReview.preview})` }"
                :class="[
                  'uploader',
                  { active: newReview.preview },
                  {
                    hovered: hovered,
                  },
                ]"
                @dragover="handleDragOver"
                @dragleave="hovered = false"
                @drop="handleChange"
              >
                <div class="uploader-title">
                  Перетащите или загрузите картинку
                </div>
                <div class="uploader-link"></div>
              </label>
              <app-button
                plain
                typeAttr="file"
                @change="handleChange"
              ></app-button>
            </div>
          </div>
          <div class="w-70p">
            <div class="form-cols">
              <div class="form-col">
                <app-input
                  v-model="newReview.author"
                  title="Имя автора"
                ></app-input>
              </div>
              <div class="form-col">
                <app-input
                  v-model="newReview.occ"
                  title="Титул автора"
                ></app-input>
              </div>
            </div>
            <div class="form-row">
              <app-input
                v-model="newReview.text"
                field-type="textarea"
                title="Отзыв"
              ></app-input>
            </div>

            <div class="form-btns">
              <div class="btn">
                <app-button
                  plain
                  title="Отмена"
                  typeAttrs="button"
                  @click="$emit('close', $event)"
                ></app-button>
              </div>
              <div class="btn">
                <app-button
                  title="Сохранить"
                  :disabled="isSubmitDisabled"
                ></app-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </card>
  </form>
</template>

<script>
import card from "../card";
import Input from "../input/input";
import appButton from "../button/button";
import appInput from "../input/input";

export default {
  components: {
    card,
    Input,
    appButton,
    appInput,
  },

  data() {
    return {
      hovered: false,
      newReview: { ...this.currentReview },
      isSubmitDisabled: false,
    };
  },
  props: {
    currentReview: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },

    async handleSubmit(value) {
      if ((await this.$validate()) === false) return;

      if (this.newReview.id) {
        await this.updateNewReview(this.newReview);

        let test = await this.updateNewReview(this.newReview);

        if (test == 1) {
          this.$emit("close");
        }
      } else {
        await this.addNewReview(this.newReview);
        this.$emit("close");
      }
    },
    handleChange(event) {
      event.preventDefault();

      const file = event.dataTransfer
        ? event.dataTransfer.files[0]
        : event.target.files[0];

      this.newReview.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.newReview.preview = reader.result;
      };
    },
  },
};
</script>


<style lang="postcss" src="./formReview.pcss" scoped>
</style>

