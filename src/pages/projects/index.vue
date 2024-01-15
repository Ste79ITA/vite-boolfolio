<template>
  <div>
    <div class="container">
      <h1>Latest Projects</h1>
    </div>

    <div class="container">
      <div class="grid">
        <div
          class="card project-card"
          v-for="project in projects"
          :key="project.id"
        >
          <h3>Title: {{ project.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  setup() {
    return {
      projects: [],
      BASE_URL: 'http://127.0.0.1:8000/api',
    };
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.BASE_URL}/projects`).then((res) => {
        console.log(res);
        this.projects = res.data.results;
        // this.projects = res.data.results.data;
        console.log(this.projects);
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped></style>
