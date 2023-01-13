<template>
    <div class="main-homepage-container">

        <div class="counter-container">
            <h1>Ujawnienie nowego auta w naszej flocie</h1>
            
            <div class="counter-container-display">{{ displayDays }}: Dni
            
                {{ displayHours }}: Godziny

                {{ displayMinutes }}: Minuty

                {{ displaySeconds }}: Sekundy
            
            </div>
                
        </div>

        <div class="reservation-button">
            <button>
                <RouterLink to="/contact" class="">ZAREZERWUJ TERAZ</RouterLink>
            </button>
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
    
        position: absolute;
        padding: 20px;
        float: left;
        font-size: 22px;
        left: 50%;
        margin-left: -230px;
        
        @media(max-width: 594px) {
        font-size: 20px;
        padding: 5px;
        left: 50%;
        margin-left: -190px;

        @media(max-width: 438px) {
        font-size: 18px;
        padding: 5px;
        left: 50%;
        margin-left: -175px;
        }
    }
    
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
    border-radius: 20px;
    padding:20px;
    background-color: rgb(37, 53, 97);
    color: white;
    
    :hover {
                color: rgb(238, 238, 165);
    }
    @media(max-width: 540px) {
        font-size: 45px;
        padding: 10px;
        margin-left: -220px;
    }
    @media(max-width: 446px) {
        font-size: 42px;
        padding: 10px;
        margin-left: -206px;
    }
    @media(max-width: 416px) {
        font-size: 35px;
        padding: 10px;
        margin-left: -175px;
    }
}
</style>