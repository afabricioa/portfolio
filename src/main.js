import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n } from 'vue-i18n'
import { messages } from './utils/messages'

const vuetify = createVuetify({
  components,
  directives,
});

const userLocale = navigator.languages && navigator.languages.length ? 
                    navigator.languages[0] : navigator.language;

const idiomaSelecionado = localStorage.getItem("lng");
const i18n = createI18n({
  locale: idiomaSelecionado !== userLocale ? idiomaSelecionado : userLocale,
  fallbackLocale: 'en',
  messages: messages
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount('#app');
