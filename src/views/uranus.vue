<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/uranus.png" alt="uranus">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="uranus" color="#0F69D9" @overview="overviewOfPlanet" @internalstructure="internalOfPlanet" @surfacegeology="surfaceOfPlanet" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="17 hours"/>
        <InfosBox des="revolution time" data="84 years"/>
        <InfosBox des="radius" data="25,362 km"/>
        <InfosBox des="average temp" data="-320 °c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetImg from '../assets/uranus.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.",
                    sourceLink: "https://solarsystem.nasa.gov/planets/uranus/overview/"
                },
                internalStructure: {
                    info: "Evidence indicates that Uranus may have a silicate rock core (perhaps rich in iron and magnesium), which is 4,800 km in diameter (approximately 40% of the planet's mass). The mantle is likely ice or ice-rock mixture (water ice, methane ice, ammonia ice) that may",
                    sourceLink: "https://science.jrank.org/pages/7122/Uranus-Uranus-s-internal-structure.html"
                },
                surfaceGeology: {
                    info: "Uranus is one of two ice-giant planets in the solar system. Like Neptune, the other ice giant, it is sometimes also called a gas giant. Information about Uranus comes mostly from data gathered by NASA’s Voyager 2 spacecraft, which approached within 80,000 kilometers (50,000 miles) of the planet’s surface.",
                    sourceLink: "https://education.seattlepi.com/geologic-activity-uranus-have-4857.html"
                },
            }
        },
        methods: {
            overviewOfPlanet() {
                this.data = this.overView
            },
            internalOfPlanet() {
                this.data = this.internalStructure
            },
            surfaceOfPlanet() {
                this.data = this.surfaceGeology
            }
        },
        mounted () {
            this.data = this.overView
            if(window.screen.width > 768){
                this.mobileViewOfPlanetPng = true
            }else{
                this.mobileViewOfPlanetPng = false
            }
            window.addEventListener('resize', () => {
                if(window.screen.width > 768){
                    this.mobileViewOfPlanetPng = true
                }else{
                    this.mobileViewOfPlanetPng = false
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
    .mercury-container{
        display: flex;
        // background-color: #070625;
        height: 100%;
        .planet-png{
            width: 60%;
            height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .planet-infos{
            width: 40%;
            color: rgb(252, 251, 246);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    footer{
        margin-top: 3%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    //large media
    @media only screen and (max-width:992px) {
       .mercury-container{
           flex-wrap: wrap;
            .planet-png{
                width:100%;
                height: 45vh;
            }
            .planet-infos{
                flex-direction: row;
                width: 100%;
            }
       }
    }

    
    @media only screen and (max-width:768px) {

        .mercury-container{
            flex-direction: column-reverse;
            .planet-infos{
                flex-direction: column-reverse;
                align-items: center;
                text-align: center;
            }
        }
        .infos-box-container{
            flex-direction: column;
        }
    }
</style>