<template>
  <navbar />
  <router-view />
  <footer />
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
<style>
#footer {
  background-color: #152d35;
  width: 10rem;
  height: 8rem;
}
</style>
