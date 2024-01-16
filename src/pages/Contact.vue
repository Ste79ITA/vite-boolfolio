<template>
  <div class="container">
    <h1>Pagina Contatti</h1>
  </div>

  <div class="container contact-container">
    <form class="form" action="" method="POST">
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <textarea name="message" id="" cols="30" rows="10"></textarea>
      <input type="submit" value="Invia" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 50px;
  padding-left: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  padding-left: 10px;
}
</style>
