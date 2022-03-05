import { createApp } from 'vue';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import AwsExports from './aws-exports';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';
// import { Vue } from 'vue-demi';

Amplify.configure(AwsExports);

createApp(App).use(store).use(router).mount('#app');
