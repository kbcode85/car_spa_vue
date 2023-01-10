<template>
    <div class="main-homepage-container">

        <div class="counter-container">
            <h1>Ujawnienie nowego auta</h1>
            <div class="counter-container-display">{{ displayDays }}: Dni</div>
            
            <div class="counter-container-display" >{{ displayHours }}: Godziny</div>

            <div class="counter-container-display" >{{ displayMinutes }}: Minuty</div>

            <div class="counter-container-display" >{{ displaySeconds }}: Sekundy</div>
        
        </div>

        <div class="reservation-button">
            <button>ZAREZERWUJ TERAZ</button>
        </div>

    </div>
</template>

<script>
export default{
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0
    }),

    computed: {
        seconds_: () => 1000,
        minutes_(){
            return this.seconds_ *60
        },
        hours_(){
            return this.minutes_ *60
        },
        days_(){
            return this.hours_ *24
        }
    },
     methods:{
        RemainTime(){
            const timer = setInterval(() => {
                const now = new Date();
                const end = new Date(2023, 1, 13, 12, 10,10,10);
                const distance = end.getTime() - now.getTime();

                if(distance < 0){
                    clearInterval(timer);
                    return;
                }

                const days = Math.floor(distance / this.days_);
                const hours = Math.floor((distance % this.days_) / this.hours_ );
                const minutes = Math.floor((distance % this.hours_) / this.minutes_ );
                const seconds = Math.floor((distance % this.minutes_) / this.seconds_ );
                this.displayDays = days <10 ? "0" + days : days;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
            }, 1000);
        }
    },
    mounted(){
        this.RemainTime();
    },
};
</script>

<style lang="scss" scoped>
.counter-container-display{
    
        
        padding: 20px;
        float: left;
        font-size: 22px;

    
}
h1{
    text-align: center;
    font-weight: 1000;
    font-size: 32px;
}
.reservation-button{
    font-size:50px;
    text-align: center;
    position: absolute;
    top: 600px;
    left: 50%;
    margin-left: -237px;
    border: solid 5px rgb(37, 53, 97);
    border-radius: 50px;
    padding:20px;
    background-color: rgb(37, 53, 97);
    color: white;
    
    :hover {
                color: yellow;
    }
    
}

</style>