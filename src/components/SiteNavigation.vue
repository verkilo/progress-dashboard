<template>
  <div class="flex align-middle justify-between border h-12">
    <div id="logo" class="border flex-1">LOGO</div>
    <nav id="sitenav" class="p-3 flex-1 flex gap-x-6 justify-end">
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="p-3 flex-1" v-if="!user">
      <router-link to="/login" class="text-blue-500">Log In</router-link>
      or
      <router-link to="/signup" class="button-blue">Sign Up</router-link>
    </div>
    <div id="user" class="flex-1 p-3" v-if="user">
      <span class="mx-2">{{ user.username }}</span>
      <a class="text-sm" @click="logout">Log Out</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SiteNavigation",
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
