<template>
  <div class="container">
    <user-auth-form @submitForm="signUpUser">
      <template v-slot:title>Sign up</template>
      <template v-slot:btn_form>Sign up</template>
      <template v-slot:title__choice>
        <router-link to="/login" class="redirect_choice">or Login</router-link>
      </template>
    </user-auth-form>
  </div>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";

export default {
  name: "SingUpView",
  components: {UserAuthForm},
}
</script>

<style scoped>
.redirect_choice {
  margin-left: 15px;
  color: grey;
  font-size: 20px;
}
</style>