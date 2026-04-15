# 🛍️ Vue Product Showcase

Catálogo interactivo de productos desarrollado como proyecto final del Módulo 7 del curso Front End Trainee de Alkemy.

## 🚀 Tecnologías utilizadas

- **Vue.js 3** — Framework principal
- **Vuex 4** — Gestión de estado global
- **Vue Router 4** — Navegación SPA
- **Axios** — Consumo de API REST
- **Vuetify** — Librería de componentes UI
- **Jest + Vue Test Utils** — Pruebas unitarias
- **Cypress** — Pruebas end-to-end
- **FakeStore API** — API pública de productos

## 📋 Funcionalidades

- Visualización de catálogo de productos desde una API REST
- Filtro de productos por categoría
- Sistema de favoritos con persistencia en Vuex
- Estados de carga, error y sin resultados
- Diseño responsive para móvil y escritorio
- Tema claro/oscuro

## 🏗️ Arquitectura

El proyecto está organizado en componentes reutilizables y módulos Vuex:

### Componentes
- `AppHeader` — Barra de navegación con toggle de tema
- `AppFooter` — Pie de página
- `ProductList` — Lista de productos con filtros
- `ProductCard` — Tarjeta individual de producto

### Módulos Vuex
- `productos` — Maneja la carga y estado de los productos
- `filtros` — Maneja la categoría seleccionada
- `favoritos` — Maneja los productos marcados como favoritos

## 🧪 Pruebas

### Pruebas unitarias (Jest)
```bash
npm run test:unit
```

### Pruebas E2E (Cypress)
```bash
npx cypress open
```

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/huepiliano/vue-product-showcase.git

# Entrar a la carpeta
cd vue-product-showcase

# Instalar dependencias
npm install

# Correr en desarrollo
npm run serve
```

## 📁 Estructura del proyecto
src/
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── ProductCard.vue
│   └── ProductList.vue
├── store/
│   ├── index.js
│   └── modules/
│       ├── productos.js
│       ├── filtros.js
│       └── favoritos.js
├── views/
│   └── HomeView.vue
├── router/
│   └── index.js
├── App.vue
└── main.js

## 🔗 Referencias

- [Vue.js Docs](https://vuejs.org/)
- [Vuex Docs](https://vuex.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)
- [FakeStore API](https://fakestoreapi.com/)
