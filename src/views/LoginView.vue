<template>
  <article>
    <UserLogin />
  </article>
</template>

<script>
// @ is an alias to /src
import UserLogin from "@/components/UserLogin.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    UserLogin,
  },
};
</script>
<style lang="scss">
#logo {
  @apply mx-auto;
}
</style>
