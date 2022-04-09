<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/earth.png" alt="earth">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="earth" color="#00bff9" @overview="overviewOfPlanet" @internalstructure="internalOfPlanet" @surfacegeology="surfaceOfPlanet" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="0.99 days"/>
        <InfosBox des="revolution time" data="365.26 days"/>
        <InfosBox des="radius" data="6,371 km"/>
        <InfosBox des="average temp" data="16°c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetImg from '../assets/earth.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth/'s surface is made up of the ocean, dwarfing Earth/'s polar ice, lakes and rivers. The remaining 29% of Earth's surface is land,consisting of continents and islands.",
                    sourceLink: "https://en.wikipedia.org/wiki/Earth"
                },
                internalStructure: {
                    info: "The internal structure of Earth, structure of the solid Earth, or simply structure of Earth refers to concentric spherical layers subdividing the Solid earth,i.e., excluding Earth's atmosphere and hydrosphere.It consists of an outer silicate solid crust, a highly viscous asthenosphere and solid mantle, ",
                    sourceLink: "https://en.wikipedia.org/wiki/Structure_of_Earth"
                },
                surfaceGeology: {
                    info: "Geology (from the Ancient Greek γῆ, gē (earth) and -λoγία, -logia, (study of, discourse))[1][2] is a branch of Earth science concerned with both the liquid and solid Earth,the rocks of which it is composed, and the processes by which they change over time. Geology can also include the study of the solid features of any terrestrial planet or natural  ",
                    sourceLink: "https://en.wikipedia.org/wiki/Geology"
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