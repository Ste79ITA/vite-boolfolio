<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }">Contatti</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
