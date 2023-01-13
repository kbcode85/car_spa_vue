<template>
  <div class="container flex flex-wrap justify-center mx-auto px-2 py-2.5">
  </div>
  <h1 id="AboutView-h1">Planujesz wyjazd, a nie posiadasz samochodu? Zapraszamy do nas!</h1>
  <div class="tekstAbout">
    <p id="gornyP">Specjalizujemy się w wypożyczaniu najróżniejszych aut</p>
    <p>Zapraszamy jeśli potrzebujesz samochodu na co dzień,</p>
    <p>planujesz wyjazd, albo chcesz przetestować sportowe auto</p>
    <p>Posiadamy ogromny asortyment pojazdów</p>
    <p>Znajdziecie u nas samochody typu:</p>
    <p id="typySamochodow">Hatchback, Sedan, Coupe, Minivan <span id="normal">oraz</span> Terenowe</p>
  </div>
  <div class="button">
    <button id="click-me" onclick="window.location.reload();">Więcej informacji o nas znajdziecie tutaj</button>
  </div>
  <img id="chevrolet" src="src\assets\Chevrolet.jpg" title="Chevrolet Camaro ZL1 2021">
  <img id="AudiAbout" src="src\assets\AudiAbout.png" title="Audi R8 2008"> 
</template>

<script>

</script>

<style scoped>

#typySamochodow {
  font-weight: bold;
}

.tekstAbout {
  border-radius: 50px 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(150, 150, 150, 0.137);
  width: 40%;
  transform: translateX(75%);
}

p {
  font-size: 20px;
  text-align: center;
}

#normal {
  font-weight: normal;
}

#gornyP {
  margin-top: 20px;
}

#AboutView-h1 {
  font-weight: bold;
  margin-top: 50px;
  font-size: 22px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  position: relative;
  }

  .button {
    margin-top: 15px;
    text-align: center;
    position: static;
    font-weight: bold;
  }

  #click-me:hover {
    color: rgb(72, 168, 72);
  }

  #click-me {
    font-size: 20px;
    color: red;
  }

  #chevrolet {
    float: left;
    width: 400px;
    margin-top: -200px;
    opacity: 80%;
  }

  #chevrolet:hover {
    opacity: 100%;
  }

  #AudiAbout {
    opacity: 80%;
    float:right;
    width: 400px;
    margin-top: -140px;
  }

  #AudiAbout:hover {
    opacity: 100%;
  }

</style>