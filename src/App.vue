<template>
  <navbar></navbar>
  <router-view />
  <footer></footer>
</template>
<script>
import navbar from "./components/navbar.vue";
import footer from "./components/footer.vue";
export default {
  components: {
    navbar,
    footer,
  },
};
</script>
<style></style>
