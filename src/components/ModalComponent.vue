<template>
    <section id="modal-layer" class="modal">
        <div class="wrapper">
            <slot></slot>
            <button class="btn" @click="closeModal">Zamknij</button>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        closeModal() {
            return this.$emit('eCloseModal', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(82, 82, 82, 0.555);

    .wrapper {
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 600px;
        border-radius: 15px;

        .btn {
            padding: 10px 25px;
            background-color: red;
            color: white;
            text-align: center;
            border: unset;
            cursor: pointer;

            &:hover {
                background-color: rgb(180, 0, 0);
            }
        }
    }
}

</style>