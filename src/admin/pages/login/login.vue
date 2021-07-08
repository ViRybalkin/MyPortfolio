<template>
  <div class="login-page-component">
    <div class="content">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form__title">Авторизация</div>
        <div class="row">
          <app-input
            title="Логин" 
            v-model="user.name"
            icon="user"
            :errorMessage="validation.firstError('user.name')"
             />
        </div>
        <div class="row">
          <app-input
            title="Пароль"
            v-model="user.password"
            icon="key"
            type="password"
            :errorMessage="validation.firstError('user.password')"
          />
        </div>
        <div class="btn">
          <app-button typeAttr="submit" title="Отправить" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import appInput from "../../components/input";
import appButton from "../../components/button";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": (value) => {
      return Validator.value(value).required("Введите пароль");
    },
  },
  data: () => ({
    user: {
      name: "",
      password: "",
    },
  }),
  components: { appButton, appInput },
  methods: {
    handleSubmit() {
      console.log(this.user.name, this.user.password);
      this.$validate().then((isValid) =>{
        if(!isValid) return 
        console.log('request');
      })
    },
  },
};
</script>

<style scoped src="./login.pcss"></style>