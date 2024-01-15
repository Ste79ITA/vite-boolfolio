<template>
  <div class="card card-post">
    <h3>Title: {{ project.title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card.card-post {
  padding: 20px;
  border-radius: 8px;
  background-color: #dedede;
}
</style>
