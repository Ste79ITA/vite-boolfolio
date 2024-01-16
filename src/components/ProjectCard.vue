<template>
  <div class="card card-post">
    <h3>Title: {{ project.title }}</h3>
    <p v-if="project.type">{{ project.type.name }}</p>

    <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"
      >Guarda il progetto...</router-link
    >
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
