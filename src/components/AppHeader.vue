<template>
  <v-app-bar color="primary" elevation="2">
    <v-spacer />
    <v-app-bar-title class="text-center">
      <span class="header__title">🛍️ Vue Product Showcase</span>
    </v-app-bar-title>
    <v-spacer />
    <template v-slot:append>
      <v-btn
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="toggleTema"
      />
    </template>
  </v-app-bar>
</template>

<script>
import { useTheme } from 'vuetify'
import { computed } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const theme = useTheme()
    const isDark = computed(() => theme.global.name.value === 'dark')
    const toggleTema = () => {
      theme.global.name.value = isDark.value ? 'light' : 'dark'
    }
    return { isDark, toggleTema }
  }
}
</script>

<style scoped>
.header__title {
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
}
</style>