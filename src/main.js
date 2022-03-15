import { Buffer } from "buffer";
import { createApp } from 'vue';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-vue';
import AwsConfig from './aws-exports';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';
import VCalendar from 'v-calendar';

Amplify.configure({});

global.Buffer = buffer.Buffer;
// import { Vue } from 'vue-demi';
console.log('here')
Amplify.configure(AwsConfig);

createApp(App).use(store).use(router).use(VCalendar, {}).mount('#app');
