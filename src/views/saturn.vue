<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/saturn.png" alt="saturn">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="saturn" color="#E6B37B" @overview="overviewOfPlanet" @internalstructure="internalOfPlanet" @surfacegeology="surfaceOfPlanet" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="10.7 hours"/>
        <InfosBox des="revolution time" data="29.4 years"/>
        <InfosBox des="radius" data="58,232 km"/>
        <InfosBox des="average temp" data="-178° c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetImg from '../assets/saturn.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.The LatestSaturn and Titan ResourcesFull Moon Guide: March - April 2022Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.",
                    sourceLink: "https://solarsystem.nasa.gov/planets/saturn/overview/"
                },
                internalStructure: {
                    info: "Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere",
                    sourceLink: "https://en.wikipedia.org/wiki/Saturn"
                },
                surfaceGeology: {
                    info: "Geology is the study of land and landforms, which are based on solid ground, like rocks, soil, and sand. Since Saturn does not have these things, Saturn does not have geological traits. However, Saturn does have several traits that may be interesting to students.",
                    sourceLink: "https://education.seattlepi.com/geological-traits-saturn-5643.html"
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