import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#42b883',
          secondary: '#35495e'
        }
      },
      dark: {
        colors: {
          primary: '#42b883',
          secondary: '#35495e'
        }
      }
    }
  }
})

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')