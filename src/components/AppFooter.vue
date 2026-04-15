<template>
  <v-footer color="secondary" class="footer">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <span class="footer__text">
          © 2025 Vue Product Showcase — Desarrollado con Vue.js
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer__text {
  font-size: 0.9rem;
  color: white;
  opacity: 0.85;
}
</style>