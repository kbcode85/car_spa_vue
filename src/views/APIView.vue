<template>
    <div class="container flex flex-wrap justify-center mx-auto px-2 py-2.5">
        <div class="w-80 mx-auto mt-3">
            <div class="input-group rounded">
                <input type="search" class="form-control" placeholder="wpisz nazwe np bmw m3"
                    @keyup.enter="searchImage" />
            </div>
        </div>

        <div v-if="loading">
        </div>
        <div v-else class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div v-for="(image, i) in images" :key="i" class="grid-container--item rounded overflow-hidden">
                <img :src="image.webformatURL" class="object-contain" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            api: "https://pixabay.com/api/?key=32832840-24ad294b8fdbad0ebba717fe4&category=transportation&q=bmw+m3",
            images: null,
            loading: false,
        }
    },
    mounted() {
        this.getImages();
    },
    methods: {
        getImages(key) {
            const query = key ? `&q=${key}` : ``;
            this.loading = true;
            axios.get(this.api + query)
                .then((response) => {
                    this.images = response.data.hits;
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    this.loading = false;
                });
        },
        searchImage(event) {
            const searchKey = event.target.value;
            if (!searchKey && searchKey == "") return;
            this.getImages(searchKey);
        },
    }
}
</script>

<style lang="scss" scoped>
input[type=search] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}
</style>