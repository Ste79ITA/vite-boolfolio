<script>
import AppHeader from './components/Header.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <!-- <ProjectIndex /> -->

  <router-view></router-view>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
