import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

var firebase = require("nativescript-plugin-firebase");

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({

  router,
  template: `<Frame><router-view/></Frame>`,

  store,

}).$start();

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);