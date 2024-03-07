import { createApp } from 'vue'
import App from './App.vue'
import { router} from './router/index.js';
import store from './store/index';
import service from './services/index'

const app = createApp(App)
app.use(router);
app.use(store);
app.use(service)


app.mount('#app')
