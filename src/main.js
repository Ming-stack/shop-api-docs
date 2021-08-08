// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import DataTable from '~/components/DataTable.vue'
import Api from '~/components/Api.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueHljs from "vue-hljs";
import hljs from "./highlight.js";
import "vue-hljs/dist/style.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(ElementUI);
  Vue.use(vueHljs, { hljs })
  Vue.component('Layout', DefaultLayout)
  Vue.component('DataTable', DataTable)
  Vue.component('Api', Api)
}
