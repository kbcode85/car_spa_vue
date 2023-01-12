<template>
    <header>
        <nav class="bg-white px-2 py-2.5">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <RouterLink to="/" class="">
                    <a class="flex items-center">
                        <img src="@/assets/logo.png" class="h-6 mr-3 sm:h-9" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap">CarsRent</span>
                    </a>
                </RouterLink>

                <div class="hidden w-full md:block md:w-auto">
                    <ul
                        class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li class="nav-items-item" @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
                            <RouterLink to="/cars" class="nav-items-item__link block py-2 pl-3 pr-4">Samochody
                            </RouterLink>
                        </li>
                        <li class="nav-items-item">
                            <RouterLink to="/vouchers" class="nav-items-item__link block py-2 pl-3 pr-4">Vouchery
                            </RouterLink>
                        </li>
                        <li class="nav-items-item">
                            <RouterLink to="/coop" class="nav-items-item__link block py-2 pl-3 pr-4">Współpraca
                            </RouterLink>
                        </li>
                        <li class="nav-items-item">
                            <RouterLink to="/contact" class="nav-items-item__link block py-2 pl-3 pr-4">Kontakt
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="mobile-menu px-2 py-2.5 flex items-center">
                    <button @click="toogleModal(true)"><i class="ri-menu-line"></i></button>
                </div>
            </div>
        </nav>


        <div class="header-bg relative overflow-hidden bg-no-repeat bg-cover">
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.75)">
                <div class="flex justify-center items-center h-full">
                    <div class="text-center text-white px-6 md:px-12">
                        <h1 class="text-2xl mt-0 mb-6">Wypożyczalnia samochodów sportowych i luksusowych</h1>
                        <button type="button"
                            class="inline-block px-4 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded">
                            O nas
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <ModalComponent v-if="showModal" @eCloseModal="toogleModal($event)" :namebutton="'Zamknij'">

            <ul class="">
                <li class="">
                    <RouterLink to="/cars" class="">Samochody</RouterLink>

                </li>
                <li class="">
                    <RouterLink to="/vouchers" class="">Vouchery</RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/coop" class="">Współpraca</RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/contact" class="">Kontakt</RouterLink>
                </li>
            </ul>
        </ModalComponent>
    </header>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables';


.active:before {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  position: absolute;
  transform: translate(-50%, -45%);
  font-size: 20px;
  content: "";
  animation: animate infinite 20s ease-in;
  left: 50%;
  top: 6%;
}

.header-bg {
    background-position: 50%;
    background-image: url('@/assets/bg.jpg');
    height: 350px;
}


.mobile-menu {
    display: none;

    @media(max-width: 767px) {
        display: block;
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
            hover: false,
        }
    },
    methods: {
        toogleModal(parm) {
            return this.showModal = parm
        }
    }
}

</script>