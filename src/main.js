import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

// Create the app instance
const app = createApp(App)

// Use Vuetify
app.use(vuetify)
// Mount the app to the #app element
app.use(store)
app.use(router)
app.mount('#app')
