/* eslint-disable prettier/prettier */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'


// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueTextAreaAutosize)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const requireComponent = require.context(
    // The relative path of the components folder
    './components',
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    );

    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    );
});


Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyBYyoKMa2h5ZJFqyCDieuFeuDj9k2FjKkk",
    authDomain: "vuetify-calender-bfdb1.firebaseapp.com",
    databaseURL: "https://vuetify-calender-bfdb1.firebaseio.com",
    projectId: "vuetify-calender-bfdb1",
    storageBucket: "vuetify-calender-bfdb1.appspot.com",
    messagingSenderId: "433859057451",
    appId: "1:433859057451:web:8427fc50c889563fdc176e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();



new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')