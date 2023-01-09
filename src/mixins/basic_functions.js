import axios from 'axios';
export default {
    data() {
        loader: false
    }, 

    methods: {
        runInfomodal() {
            console.log('enable modal')
        },

        getDataFromNasa() {
            this.loader = true;
            axios.get('https://images-api.nasa.gov/search?q=sun')
                .then( (response) => {
                    let imgUrl = response.data.collection.items[0].links[0].href
                    let imgObj = document.createElement('img')
                    imgObj.setAttribute('style', 'width: 100%')
                    imgObj.setAttribute('src', imgUrl)
                   document.getElementById('id-loader').appendChild(imgObj)
                    // handle success
                    console.log(response.data.collection.items[0].links[0].href);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }
}