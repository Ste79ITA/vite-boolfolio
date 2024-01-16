<template>
  <div>
    <div class="container">
      <h1>Title: {{ project.title }}</h1>
      <!-- <p>{{ $route.params.slug }}</p> -->
      <!-- <p>{{ slug }}</p> -->
      <p>Slug: {{ project.slug }}</p>
      <p v-if="project.type">Categoria del Progetto: {{ project.type.name }}</p>
      <ul class="technology">
        <li
          class="tag"
          v-for="technology in project.technologies"
          :key="technology.id"
        >
          {{ technology.name }}
        </li>
      </ul>
    </div>
  </div>

  <div class="container" v-html="project.content"></div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: {},
      BASE_URL: 'http://127.0.0.1:8000/api',
    };
  },
  props: {
    slug: String,
  },
  methods: {
    fetchPost() {
      axios
        .get(`${this.BASE_URL}/projects/${this.slug}`)
        .then((res) => {
          // console.log(res.data.project);
          this.project = res.data.project;
        })
        .catch((error) => {
          console.log('Project not found');

          if (error.response.status === 404) {
            this.$router.push({ name: 'not-found' });
          }
        });
    },
  },
  created() {
    this.fetchPost();
  },
};
</script>

<style lang="scss" scoped>
.technology {
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 15px;
  .tag {
    background-color: cornflowerblue;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>
