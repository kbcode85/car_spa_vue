<template>
    <header>
        <nav id="topnav" class="nav">
            <div class="logo">
                <img src="@/assets/logo.png" class="logo-img" alt="logo" title="Fit Pizza">
            </div>
            <ul class="nav-items">
                <li class="nav-items-item">
                    <RouterLink to="/" class="nav-items-item__link">Witamy</RouterLink>
                </li>
                <li class="nav-items-item">Menu</li>
                <li class="nav-items-item">
                    <RouterLink to="/about" class="nav-items-item__link">O nas</RouterLink>
                </li>
                <li class="nav-items-item">Kontakt</li>
            </ul>
            <div class="mobile-menu">
                <button @click="toogleModal(true)">Pokaż menu</button>
            </div>
        </nav>

        <ModalComponent v-if="showModal" @eCloseModal="toogleModal($event)">
            <ul class="">
                <li class="">
                    <RouterLink to="/" class="">Witamy</RouterLink>
                </li>
                <li class="">Menu</li>
                <li class="">
                    <RouterLink to="/about" class="">O nas</RouterLink>
                </li>
                <li class="">Kontakt</li>
            </ul>
        </ModalComponent>
    </header>
</template>
<style lang="scss" scoped>
.nav {
    display: flex;
    background-color: rgb(239, 250, 250);
    position: relative;
    min-height: 30px;
    height: 100%;
    border-bottom: 4px solid rgba(8, 186, 20, 0.516);

    .logo {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 10%;

        &-img {
            max-width: 50px;
        }
    }

    &-items {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0 0 0;
        color: black;

        &-item {
            padding: 0 5px;
            list-style-type: none;

            &__link {
                text-decoration: none;
                color: black;
            }

        }

        @media(max-width: 500px) {
            display: none;
        }
    }

    .mobile-menu {
        display: none;
        position: absolute;
        right: 0;
        
        button {
            padding: 18px 25px;
            background-color: rgb(11, 213, 38);
            color: white;
            text-align: center;
            border: unset;
            cursor: pointer;

            &:hover {
                background-color: rgb(4, 73, 15);
            }
        }

        @media(max-width: 500px) {
            display: block;
        }
    }
}

.router-link-active {
    color: rgb(8, 186, 20);
}
</style>
<script>
import ModalComponent from './ModalComponent.vue';
export default {
    components: {
        ModalComponent
    },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        toogleModal(parm) {
            return this.showModal = parm
        }
    }
}

</script>