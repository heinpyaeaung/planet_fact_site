<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/mercury.png" alt="mercury">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="mercury" color="#c17731" @overview="overviewOfMercury" @internalstructure="internalOfMercury" @surfacegeology="surfaceOfMercury" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="59 days"/>
        <InfosBox des="revolution time" data="88 days"/>
        <InfosBox des="radius" data="2439.7 km"/>
        <InfosBox des="average temp" data="430° c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import mercuryImg from '../assets/mercury.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: mercuryImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days,the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an ",
                    sourceLink: "https://en.wikipedia.org/wiki/Mercury_(planet)"
                },
                internalStructure: {
                    info: "Mercury's axis has the smallest tilt of any of the Solar System's planets (about 1⁄30 degree). Its orbital eccentricity is the largest of all known planets in the Solar System;[b] at perihelion, Mercury's distance from the Sun is only about two-thirds (or 66%) of its distance at aphelion.Mercury's surface appears heavily ",
                    sourceLink: " https://en.wikipedia.org/wiki/Mercury_(planet)"
                },
                surfaceGeology: {
                    info: "The geology of Mercury is the scientific study of the surface, crust, and interior of the planet Mercury. It emphasizes the composition,structure, history, and physical processes that shape the planet. It is analogous to the field of terrestrial geology. In planetary science,",
                    sourceLink: "https://en.wikipedia.org/wiki/Geology_of_Mercury"
                },
            }
        },
        methods: {
            overviewOfMercury() {
                this.data = this.overView
            },
            internalOfMercury() {
                this.data = this.internalStructure
            },
            surfaceOfMercury() {
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