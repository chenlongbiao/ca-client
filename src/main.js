// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Input, Dialog, Button, Menu, Submenu, MenuItem, Breadcrumb, Pagination, BreadcrumbItem, Table, TableColumn, TabPane, Tabs} from 'element-ui'
import 'element-ui/lib/theme-default/button.css'
import { store } from './store/store'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.config.productionTip = true
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
// Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Submenu.name, Submenu)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
// Vue.use(Button)
Vue.use(vueEventCalendar, {locale: 'zh'})
// Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
