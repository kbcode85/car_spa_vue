<template>
    <section id="modal-layer" class="modal">
        <div class="wrapper">
            <div v-if="loader" id="id-loader"> </div>
                <slot></slot>
            <button class="btn" @click="closeModal">{{ namebutton }}</button>
        </div>

    </section>
</template>
<script> 
//import BasicFunction from '@/mixins/basic_functions'
export default {
    props:['namebutton'],
    //mixins:[BasicFunction],

    created() {
        //this.runInfomodal()
        //this.getDataFromNasa()
    },

    methods: {
        closeModal() {
            return this.$emit('eCloseModal', false)
        }
    }
}
</script>
<style scoped lang="scss">
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(144, 137, 137, 0.8);
    z-index: +1;
    

    .wrapper {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        border-radius: 15px;
        z-index: +1;

        .btn {
            padding: 10px 25px;
            background-color: red;
            color: white;
            text-align: center;
            border: unset;
            cursor: pointer;
        }
    }
}
</style>