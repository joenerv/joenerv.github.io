

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Vue.prototype.$http = axios;

    new Vue({
        el: '#app',
        data() {
          return {
            info: null
          };
        },
        mounted() {
          axios
            .get('https://github.com/M-Media-Group/country-json/blob/master/src/countries-master.json')
            .then(response => (this.info = response));
        }
    });


});