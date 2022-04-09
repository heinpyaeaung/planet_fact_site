<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/neptune.png" alt="neptune">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="neptune" color="#47E3FE" @overview="overviewOfPlanet" @internalstructure="internalOfPlanet" @surfacegeology="surfaceOfPlanet" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="16 hours"/>
        <InfosBox des="revolution time" data="164.8 years"/>
        <InfosBox des="radius" data="24,622 km"/>
        <InfosBox des="average temp" data="-330°c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetImg from '../assets/neptune.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because",
                    sourceLink: "https://en.wikipedia.org/wiki/Neptune"
                },
                internalStructure: {
                    info: "Neptune, like the rest of the gas giant planets in the Solar System, can be broken up into various layers. The composition of Neptune changes depending on which of these layers you’re looking at. The outermost layer of Neptune is the atmosphere, forming about 5-10% of the planet’s mass, and extending up to 20% of the way down to its core.",
                    sourceLink: "https://www.universetoday.com/21596/what-is-neptune-made-of-1/"
                },
                surfaceGeology: {
                    info: "Voyager 2 detected a magnetic field or magnetosphere around Neptune. It is 25 times stronger than that of Earth and seems to be centered closer to Neptune's cloud tops than its center, as is the case with the Earth’s magnetic field. Neptune's magnetic field axis is tilted at 47 degrees to its rotational axis.",
                    sourceLink: "https://sciencing.com/geology-neptune-3200.html"
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