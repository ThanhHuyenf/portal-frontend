import { createApp } from 'vue'
import App from './App.vue'
import { router} from './router/index.js';
import store from './store/index';
import * as service from './services/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router);
app.use(store);
app.use(service)
app.use(ElementPlus)

app.mount('#app')
