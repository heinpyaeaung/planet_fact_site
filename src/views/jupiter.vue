<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/jupiter.png" alt="jupiter">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="jupiter" color="#8f9a93" @overview="overviewOfPlanet" @internalstructure="internalOfPlanet" @surfacegeology="surfaceOfPlanet" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="10 hours"/>
        <InfosBox des="revolution time" data="11 years"/>
        <InfosBox des="radius" data="71,492 km"/>
        <InfosBox des="average temp" data="-110°c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetImg from '../assets/jupiter.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Jupiter is the most massive and largest planet of the solar system, mainly composed of hydrogen. Its atmosphere is characterized by the presence of ammonia clouds that at mid/low latitudes are arranged in bands with alternating wind motions and storms of different size, highlighting very complex dynamics.",
                    sourceLink: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/jupiter"
                },
                internalStructure: {
                    info: "The atmosphere of Jupiter constitutes only a very small fraction of the planet, much as the skin of an apple compares with its contents. Because nothing can be directly observed below this thin outer layer, indirect conclusions are drawn from the evidence in order to determine the composition of the interior of Jupiter.",
                    sourceLink: "https://www.britannica.com/place/Jupiter-planet/The-interior"
                },
                surfaceGeology: {
                    info: "Jupiter is most likely the oldest planet in the Solar System.[27] Current models of Solar System formation suggest that Jupiter formed at or beyond the snow line; a distance from the early Sun where the temperature is sufficiently cold for volatiles such as water to condense into solids.[28] It first assembled a large solid core before accumulating its gaseous atmosphere. As a consequence, the core must have formed before the solar nebula began to dissipate after 10 million years.",
                    sourceLink: "https://en.wikipedia.org/wiki/Jupiter"
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