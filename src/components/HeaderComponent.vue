<template>
    <header>
        <nav id="topnav" class="nav">
            <div class="logo">
                <RouterLink to="/">
                <img src="@/assets/logo.png" class="logo-img" alt="logo" title="Fit Pizza">
                </RouterLink>
            </div>
            <ul class="nav-items">
                <li class="nav-items-item">
                    <RouterLink to="/cars" class="nav-items-item__link">Samochody</RouterLink>
                </li>
                <li class="nav-items-item">
                    <RouterLink to="/vouchers" class="nav-items-item__link">Vouchery</RouterLink>
                </li>
                <li class="nav-items-item">
                    <RouterLink to="/coop" class="nav-items-item__link">Współpraca</RouterLink>
                </li>
                <li class="nav-items-item">
                    <RouterLink to="/contact" class="nav-items-item__link">Kontakt</RouterLink>
                </li>
            </ul>
            <div class="mobile-menu">
                <button @click="toogleModal(true)">Pokaż menu</button>
            </div>
        </nav>

        <ModalComponent v-if="showModal" @eCloseModal="toogleModal($event)" :namebutton="'Zamknij'">
            
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
@import '@/assets/scss/variables';

.nav {
    display: flex;
    background-color: rgb(239, 250, 250);
    position: relative;
    min-height: 80px;
    height: 100%;
    border-bottom: 4px solid black;

    @media (max-width: 500px) { 
        min-height: 50px;
    }

    .logo {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 10%;

        &-img {
            width: 100%;
            height: 100%;
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

            &:not(:last-child) {
                 border-right: 2px solid black;
            }
           
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
            padding: 16px 25px;
            background-color: black;
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