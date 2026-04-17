/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1532:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(5130);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6768);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=3d684139

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppHeader = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("AppHeader");
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
  const _component_v_main = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-main");
  const _component_AppFooter = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("AppFooter");
  const _component_v_app = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-app");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_app, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_AppHeader), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_main, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_view)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_AppFooter)]),
    _: 1
  });
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=template&id=4ffff05a&scoped=true

function AppHeadervue_type_template_id_4ffff05a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_spacer = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-spacer");
  const _component_v_app_bar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-app-bar-title");
  const _component_v_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-btn");
  const _component_v_app_bar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-app-bar");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_app_bar, {
    color: "primary",
    elevation: "2"
  }, {
    append: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_btn, {
      icon: $setup.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night',
      onClick: $setup.toggleTema
    }, null, 8, ["icon", "onClick"])]),
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_spacer), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_app_bar_title, {
      class: "text-center"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
        class: "header__title"
      }, "🛍️ Vue Product Showcase", -1)]))]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_spacer)]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/theme.js
var composables_theme = __webpack_require__(2225);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=script&lang=js


/* harmony default export */ var AppHeadervue_type_script_lang_js = ({
  name: 'AppHeader',
  setup() {
    const theme = (0,composables_theme/* useTheme */.DP)();
    const isDark = (0,runtime_core_esm_bundler/* computed */.EW)(() => theme.global.name.value === 'dark');
    const toggleTema = () => {
      theme.global.name.value = isDark.value ? 'light' : 'dark';
    };
    return {
      isDark,
      toggleTema
    };
  }
});
;// ./src/components/AppHeader.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppHeader.vue?vue&type=style&index=0&id=4ffff05a&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/AppHeader.vue?vue&type=style&index=0&id=4ffff05a&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1241);
;// ./src/components/AppHeader.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(AppHeadervue_type_script_lang_js, [['render',AppHeadervue_type_template_id_4ffff05a_scoped_true_render],['__scopeId',"data-v-4ffff05a"]])

/* harmony default export */ var AppHeader = (__exports__);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppFooter.vue?vue&type=template&id=7c8feae7&scoped=true

function AppFootervue_type_template_id_7c8feae7_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_col = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-col");
  const _component_v_row = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-row");
  const _component_v_footer = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-footer");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_footer, {
    color: "secondary",
    class: "footer"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_row, {
      justify: "center"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_col, {
        cols: "12",
        class: "text-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
          class: "footer__text"
        }, " © 2025 Vue Product Showcase — Desarrollado con Vue.js ", -1)]))]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppFooter.vue?vue&type=script&lang=js
/* harmony default export */ var AppFootervue_type_script_lang_js = ({
  name: 'AppFooter'
});
;// ./src/components/AppFooter.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppFooter.vue?vue&type=style&index=0&id=7c8feae7&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/AppFooter.vue?vue&type=style&index=0&id=7c8feae7&scoped=true&lang=css

;// ./src/components/AppFooter.vue




;


const AppFooter_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(AppFootervue_type_script_lang_js, [['render',AppFootervue_type_template_id_7c8feae7_scoped_true_render],['__scopeId',"data-v-7c8feae7"]])

/* harmony default export */ var AppFooter = (AppFooter_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js


/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter
  }
});
;// ./src/App.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=3d684139&lang=css
// extracted by mini-css-extract-plugin

;// ./src/App.vue?vue&type=style&index=0&id=3d684139&lang=css

;// ./src/App.vue




;


const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 1 modules
var vue_router = __webpack_require__(8728);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=6980ec7f

const _hoisted_1 = {
  class: "home"
};
function HomeViewvue_type_template_id_6980ec7f_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProductList = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ProductList");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_ProductList)]);
}
;// ./src/views/HomeView.vue?vue&type=template&id=6980ec7f

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(4232);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProductList.vue?vue&type=template&id=b583a9ba&scoped=true

const ProductListvue_type_template_id_b583a9ba_scoped_true_hoisted_1 = {
  class: "product-list__filters"
};
const _hoisted_2 = {
  key: 0,
  class: "product-list__status"
};
function ProductListvue_type_template_id_b583a9ba_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-btn");
  const _component_v_progress_circular = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-progress-circular");
  const _component_v_alert = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-alert");
  const _component_ProductCard = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ProductCard");
  const _component_v_col = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-col");
  const _component_v_row = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-row");
  const _component_v_container = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-container");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_container, {
    class: "product-list"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", {
      class: "product-list__title"
    }, "Nuestros Productos", -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProductListvue_type_template_id_b583a9ba_scoped_true_hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.categorias, categoria => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_btn, {
        key: categoria,
        color: _ctx.categoriaActual === categoria ? 'primary' : '',
        variant: _ctx.categoriaActual === categoria ? 'elevated' : 'outlined',
        rounded: "xl",
        class: "filter-btn",
        onClick: $event => _ctx.filtrarPor(categoria)
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(categoria), 1)]),
        _: 2
      }, 1032, ["color", "variant", "onClick"]);
    }), 128))]), $options.cargando ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_progress_circular, {
      indeterminate: "",
      color: "primary"
    }), _cache[0] || (_cache[0] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "Cargando productos...", -1))])) : $options.error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_alert, {
      key: 1,
      type: "error",
      class: "my-4"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($options.error), 1)]),
      _: 1
    })) : _ctx.productosFiltrados.length === 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_alert, {
      key: 2,
      type: "info",
      class: "my-4"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[1] || (_cache[1] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 😕 No hay productos en esta categoría. ", -1)]))]),
      _: 1
    })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_row, {
      key: 3
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.productosFiltrados, product => {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_col, {
          key: product.id,
          cols: "12",
          sm: "6",
          md: "4",
          lg: "3"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_ProductCard, {
            product: product
          }, null, 8, ["product"])]),
          _: 2
        }, 1024);
      }), 128))]),
      _: 1
    }))]),
    _: 1
  });
}
;// ./src/components/ProductList.vue?vue&type=template&id=b583a9ba&scoped=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 5 modules
var vuex_esm_bundler = __webpack_require__(782);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProductCard.vue?vue&type=template&id=f6abc05c&scoped=true

const ProductCardvue_type_template_id_f6abc05c_scoped_true_hoisted_1 = {
  class: "product-card__title"
};
const ProductCardvue_type_template_id_f6abc05c_scoped_true_hoisted_2 = {
  class: "product-card__price"
};
function ProductCardvue_type_template_id_f6abc05c_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-btn");
  const _component_v_img = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-img");
  const _component_v_chip = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-chip");
  const _component_v_card_text = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-card-text");
  const _component_v_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_card, {
    class: "product-card",
    elevation: "3",
    rounded: "lg"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_btn, {
      class: "product-card__fav",
      icon: _ctx.esFavorito($props.product.id) ? 'mdi-heart' : 'mdi-heart-outline',
      color: _ctx.esFavorito($props.product.id) ? 'red' : 'grey',
      variant: "text",
      onClick: _cache[0] || (_cache[0] = $event => _ctx.toggleFavorito($props.product))
    }, null, 8, ["icon", "color"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_img, {
      src: $props.product.image,
      alt: $props.product.title,
      height: "200",
      contain: "",
      class: "product-card__image"
    }, null, 8, ["src", "alt"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_card_text, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_chip, {
        color: "primary",
        size: "small",
        class: "mb-2"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.product.category), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", ProductCardvue_type_template_id_f6abc05c_scoped_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($props.product.title), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", ProductCardvue_type_template_id_f6abc05c_scoped_true_hoisted_2, "$" + (0,shared_esm_bundler/* toDisplayString */.v_)($props.product.price), 1)]),
      _: 1
    })]),
    _: 1
  });
}
;// ./src/components/ProductCard.vue?vue&type=template&id=f6abc05c&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProductCard.vue?vue&type=script&lang=js

/* harmony default export */ var ProductCardvue_type_script_lang_js = ({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...(0,vuex_esm_bundler/* mapGetters */.L8)('favoritos', ['esFavorito'])
  },
  methods: {
    ...(0,vuex_esm_bundler/* mapActions */.i0)('favoritos', ['toggleFavorito'])
  },
  mounted() {
    console.log('ProductCard montado para:', this.product.title);
  }
});
;// ./src/components/ProductCard.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProductCard.vue?vue&type=style&index=0&id=f6abc05c&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/ProductCard.vue?vue&type=style&index=0&id=f6abc05c&scoped=true&lang=css

;// ./src/components/ProductCard.vue




;


const ProductCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ProductCardvue_type_script_lang_js, [['render',ProductCardvue_type_template_id_f6abc05c_scoped_true_render],['__scopeId',"data-v-f6abc05c"]])

/* harmony default export */ var ProductCard = (ProductCard_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProductList.vue?vue&type=script&lang=js


/* harmony default export */ var ProductListvue_type_script_lang_js = ({
  name: 'ProductList',
  components: {
    ProductCard: ProductCard
  },
  computed: {
    ...(0,vuex_esm_bundler/* mapGetters */.L8)('productos', ['productosFiltrados', 'categorias', 'estaCargando', 'hayError']),
    ...(0,vuex_esm_bundler/* mapGetters */.L8)('filtros', ['categoriaActual']),
    cargando() {
      return this.estaCargando;
    },
    error() {
      return this.hayError;
    }
  },
  methods: {
    ...(0,vuex_esm_bundler/* mapActions */.i0)('productos', ['obtenerProductos']),
    ...(0,vuex_esm_bundler/* mapActions */.i0)('filtros', ['filtrarPor'])
  },
  mounted() {
    this.obtenerProductos();
  }
});
;// ./src/components/ProductList.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ProductList.vue?vue&type=style&index=0&id=b583a9ba&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/ProductList.vue?vue&type=style&index=0&id=b583a9ba&scoped=true&lang=css

;// ./src/components/ProductList.vue




;


const ProductList_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ProductListvue_type_script_lang_js, [['render',ProductListvue_type_template_id_b583a9ba_scoped_true_render],['__scopeId',"data-v-b583a9ba"]])

/* harmony default export */ var ProductList = (ProductList_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js

/* harmony default export */ var HomeViewvue_type_script_lang_js = ({
  name: 'HomeView',
  components: {
    ProductList: ProductList
  }
});
;// ./src/views/HomeView.vue?vue&type=script&lang=js
 
;// ./src/views/HomeView.vue




;
const HomeView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(HomeViewvue_type_script_lang_js, [['render',HomeViewvue_type_template_id_6980ec7f_render]])

/* harmony default export */ var HomeView = (HomeView_exports_);
;// ./src/router/index.js


const routes = [{
  path: '/',
  name: 'home',
  component: HomeView
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => __webpack_require__.e(/* import() | about */ 594).then(__webpack_require__.bind(__webpack_require__, 603))
}];
const router = (0,vue_router/* createRouter */.aE)({
  history: (0,vue_router/* createWebHashHistory */.Bt)(),
  routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(4373);
;// ./src/store/modules/productos.js

const state = {
  productos: [],
  cargando: false,
  error: null
};
const getters = {
  todosLosProductos: state => state.productos,
  estaCargando: state => state.cargando,
  hayError: state => state.error,
  productosFiltrados: (state, getters, rootState) => {
    const categoria = rootState.filtros.categoriaSeleccionada;
    if (categoria === 'Todas') {
      return state.productos;
    }
    return state.productos.filter(p => p.category === categoria);
  },
  categorias: state => {
    const cats = state.productos.map(p => p.category);
    return ['Todas', ...new Set(cats)];
  }
};
const mutations = {
  SET_PRODUCTOS(state, productos) {
    state.productos = productos;
  },
  SET_CARGANDO(state, valor) {
    state.cargando = valor;
  },
  SET_ERROR(state, mensaje) {
    state.error = mensaje;
  }
};
const actions = {
  async obtenerProductos({
    commit
  }) {
    commit('SET_CARGANDO', true);
    commit('SET_ERROR', null);
    try {
      const respuesta = await axios/* default */.A.get('https://fakestoreapi.com/products');
      commit('SET_PRODUCTOS', respuesta.data);
    } catch (err) {
      commit('SET_ERROR', 'Hubo un problema al cargar los productos. Intenta de nuevo más tarde.');
      console.error(err);
    } finally {
      commit('SET_CARGANDO', false);
    }
  }
};
/* harmony default export */ var productos = ({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
});
;// ./src/store/modules/filtros.js
const filtros_state = {
  categoriaSeleccionada: 'Todas'
};
const filtros_getters = {
  categoriaActual: state => state.categoriaSeleccionada
};
const filtros_mutations = {
  SET_CATEGORIA(state, categoria) {
    state.categoriaSeleccionada = categoria;
  }
};
const filtros_actions = {
  filtrarPor({
    commit
  }, categoria) {
    commit('SET_CATEGORIA', categoria);
  }
};
/* harmony default export */ var filtros = ({
  namespaced: true,
  state: filtros_state,
  getters: filtros_getters,
  mutations: filtros_mutations,
  actions: filtros_actions
});
;// ./src/store/modules/favoritos.js
const favoritos_state = {
  favoritos: []
};
const favoritos_getters = {
  todosFavoritos: state => state.favoritos,
  esFavorito: state => id => {
    return state.favoritos.some(p => p.id === id);
  },
  totalFavoritos: state => state.favoritos.length
};
const favoritos_mutations = {
  AGREGAR_FAVORITO(state, producto) {
    state.favoritos.push(producto);
  },
  QUITAR_FAVORITO(state, id) {
    state.favoritos = state.favoritos.filter(p => p.id !== id);
  }
};
const favoritos_actions = {
  toggleFavorito({
    commit,
    state
  }, producto) {
    const existe = state.favoritos.some(p => p.id === producto.id);
    if (existe) {
      commit('QUITAR_FAVORITO', producto.id);
    } else {
      commit('AGREGAR_FAVORITO', producto);
    }
  }
};
/* harmony default export */ var favoritos = ({
  namespaced: true,
  state: favoritos_state,
  getters: favoritos_getters,
  mutations: favoritos_mutations,
  actions: favoritos_actions
});
;// ./src/store/index.js




/* harmony default export */ var store = ((0,vuex_esm_bundler/* createStore */.y$)({
  modules: {
    productos: productos,
    filtros: filtros,
    favoritos: favoritos
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 2 modules
var framework = __webpack_require__(6169);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/index.js + 464 modules
var components = __webpack_require__(198);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/index.js + 4 modules
var directives = __webpack_require__(4597);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/styles/main.css
var main = __webpack_require__(5524);
;// ./src/main.js





// Vuetify





const vuetify = (0,framework/* createVuetify */.$N)({
  components: components,
  directives: directives,
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
});
(0,runtime_dom_esm_bundler/* createApp */.Ef)(App).use(store).use(src_router).use(vuetify).mount('#app');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + "about" + "." + "75fc0055" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vue-product-showcase:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/vue-product-showcase/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_product_showcase"] = self["webpackChunkvue_product_showcase"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [504], function() { return __webpack_require__(1532); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.2e459fe1.js.map