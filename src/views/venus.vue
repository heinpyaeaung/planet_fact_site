<template>
    <div class="mercury-container">
        <aside v-if="mobileViewOfPlanetPng" class="planet-png">
            <img src="../assets/venus.png" alt="venus">
        </aside>
        <aside class="planet-infos">
           <InfosForm :imgUrl="imgUrl" title="venus" color="#baa68c" @overview="overviewOfPlanet" @internalstructure="internalOfPlanet" @surfacegeology="surfaceOfPlanet" :infos="data"/>
        </aside>
    </div>
    <footer class="infos-box-container">
        <InfosBox des="rotation time" data="10 hours"/>
        <InfosBox des="revolution time" data="243 days"/>
        <InfosBox des="radius" data="6,051 km"/>
        <InfosBox des="average temp" data="464°c"/>
    </footer>
</template>

<script>
import InfosBox from '../components/infosBox.vue'
import InfosForm from '../components/InfosForm.vue'
import planetImg from '../assets/venus.png'

    export default {
        components: { InfosForm, InfosBox },
        data() {
            return {
                data: "", 
                imgUrl: planetImg,
                mobileViewOfPlanetPng: null,    
                overView: {
                    info: "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.",
                    sourceLink: "https://solarsystem.nasa.gov/planets/venus/overview/"
                },
                internalStructure: {
                    info: "The interior of Venus is probably similar to Earth's interior. Venus, like Earth, is one of the terrestrial planets and is made of rock and metal. It probably has a partly molten metallic core, a rocky mantle, and a crust. The planet rotates very slowly, taking more than 243 Earth days to spin once on it's axis (even longer than the time it takes for Venus to orbit the Sun, ",           
                    sourceLink: "https://www.windows2universe.org/venus/interior.html"
                },
                surfaceGeology: {
                    info: "Venus is a planet with striking geology. Of all the other planets in the Solar System, it is the one nearest to Earth and most like it in terms of mass, but has no magnetic field or recognizable plate tectonic system. Much of the ground surface is exposed volcanic bedrock, some with thin and patchy layers of soil covering, in marked contrast with Earth, ",
                    sourceLink: "https://en.wikipedia.org/wiki/Geology_of_Venus"
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