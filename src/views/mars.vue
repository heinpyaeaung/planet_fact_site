<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/mars.png" alt="mercury">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="mars" color="#ac300b" @overview="overviewOfMercury" @internalstructure="internalOfMercury" @surfacegeology="surfaceOfMercury" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="1 day"/>
        <InfosBox des="revolution time" data="686 days"/>
        <InfosBox des="radius" data="3,389 km"/>
        <InfosBox des="average temp" data="167° c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetPng from '../assets/mars.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetPng,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often called the Red Planet.[17][18] The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a striking reddish appearance in the sky.[19]",
                    sourceLink: "https://en.wikipedia.org/wiki/Mars"
                },
                internalStructure: {
                    info: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials.[34][35] Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.[36] This iron(II) sulfide core is thought tobe twice as rich in lighter elements as Earth's.[37] The core is surrounded by a silicate mantle that formed many of the tectonic and",
                    sourceLink: "https://en.wikipedia.org/wiki/Mars"
                },
                surfaceGeology: {
                    info: "The geology of Mars is the scientific study of the surface, crust, and interior of the planet Mars. It emphasizes the composition, structure, history, and physical processes thatshape the planet. It is analogous to the field of terrestrial geology. In planetary science, the term geology is used in its broadest sense to mean the study of the solid parts of planets and moons. ",
                    sourceLink: "https://en.wikipedia.org/wiki/Geology_of_Mars"
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