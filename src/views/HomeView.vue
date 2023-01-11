<template>
  <div class="flex p-4 justify-center">
      
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


  </div>

</template>
<script>
import NewCarCounter from '@/components/NewCarCounter.vue';


export default{
  components: {
    NewCarCounter
}
}
</script>

<style lang="scss" scoped>


</style>