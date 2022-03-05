<template>
  <SiteNavigation />
  <main class="max-w-3xl mx-auto min-h-screen">
    <router-view />
  </main>
</template>
<script>
import SiteNavigation from "./components/SiteNavigation";
import { mapActions } from "vuex";
export default {
  mounted() {
    this.authAction();
  },
  components: {
    SiteNavigation,
  },
  methods: {
    ...mapActions("auth", ["authAction"]),
  },
  // setup() {},
};
</script>

<style lang="scss">
</style>
