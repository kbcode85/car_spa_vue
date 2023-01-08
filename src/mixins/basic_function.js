import axios from 'axios'

export default {
    methods: {
        data() {
            loader: false
        },
        runInfomodal() {
            console.log('enable modal')
        },
        getDataFromNasa() {
            this.loader = true
            axios.get('https://images-api.nasa.gov/search?q=sun')
                .then(function (response) {
                    // handle success
                    console.log(response.data.collection.items[0].links[0].href);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        }
    },
}