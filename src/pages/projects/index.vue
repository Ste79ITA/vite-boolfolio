<template>
  <div>
    <div class="container">
      <h1>Latest Projects</h1>
    </div>

    <div class="container">
      <div class="grid">
        <ProjectCard
          class="card project-card"
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
    <div class="container page-container">
      <button>PREV PAGE</button>
      <button>NEXT PAGE</button>
      <button>LAST PAGE</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      BASE_URL: 'http://127.0.0.1:8000/api',
    };
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.BASE_URL}/projects`).then((res) => {
        // console.log(res);
        // this.projects = res.data.results;
        this.projects = res.data.results.data;
        // console.log(this.projects);
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
}
.page-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 50px;
}
</style>
