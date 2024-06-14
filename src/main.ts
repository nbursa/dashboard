import './assets/main.css'
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faCloudSun, faTasks, faCalendarAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

library.add(faHome, faCloudSun, faTasks, faCalendarAlt, faNewspaper);

const app = createApp(App);

app.use(router);
app.use(VCalendar, {})

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
