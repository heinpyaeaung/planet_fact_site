<template>
    <div class="infos-div">
        <h1>{{title.toUpperCase()}}</h1>
        <p v-if="infos.info">{{infos.info.length > 300 ? `${infos.info}...`: infos.info}}</p>
        <div class="linking-div">
            Source :<a :href="infos.sourceLink"> Wikipedia </a>
        </div>
    </div>
    <div v-if="mobileViewOfPlanetPng" class="png">
        <img ref="planet" :src="imgUrl" alt="planet-png" id="planet">
    </div>
    <div v-if="!mobileViewOfPlanetPng" class="structure-box">
        <section @click="overView(), currentTab(0)" ref="overview">01 OVERVIEW</section>
        <section @click="internalStructure(), currentTab(1)" ref="internalstructure">02 INTERNAL STRUCTURE</section>
        <section @click="surfaceGeology(), currentTab(2)" ref="surfacegeology">03 SURFACE GEOLOGY</section>
    </div>
    <div  v-if="mobileViewOfPlanetPng" class="structure-box">
        <section @click="overView(), currentTab(0)" ref="overview">OVERVIEW</section>
        <section @click="internalStructure(), currentTab(1)" ref="internalstructure">STRUCTURE</section>
        <section @click="surfaceGeology(), currentTab(2)" ref="surfacegeology">GEOLOGY</section>
    </div>
</template>

<script>
    export default{
        props: ['title', 'infos', 'color', 'imgUrl'],
        emits: ['overview','internalstructure','surfacegeology'],
        data() {
            return {
              OriginalbackgroundColor: "#070625",
              mobileViewOfPlanetPng: false      
            }
        },
        mounted () {
            setTimeout(() => {
                if(this.mobileViewOfPlanetPng){
                    this.$refs['overview'].style.borderBottom = `3px solid ${this.color}`;
                }else{
                    this.$refs['overview'].style.backgroundColor = this.color;
                }              
            },100);
            // console.log(this.color)
            if(window.screen.width <= 768){
                this.mobileViewOfPlanetPng = true
            }else{
                this.mobileViewOfPlanetPng = false
            }
            window.addEventListener('resize', () => {
                if(window.screen.width <= 768){
                    this.mobileViewOfPlanetPng = true
                }else{
                    this.mobileViewOfPlanetPng = false
                }
            })
        },
        methods: {
            overView(){
                this.$emit('overview')
            },
            internalStructure(){
               this.$emit('internalstructure')
            },
            surfaceGeology(){
                this.$emit('surfacegeology')
            },
            currentTab(x){
                let sectionArr = ['overview', 'internalstructure', 'surfacegeology']
                sectionArr.forEach(e => {
                  this.$refs[e].style.backgroundColor = '';
                  this.$refs[e].style.borderBottom = '';
                })
                if(this.mobileViewOfPlanetPng){
                    this.$refs[sectionArr[x]].style.borderBottom = `3px solid ${this.color}`;
                }else{
                    this.$refs[sectionArr[x]].style.backgroundColor = this.color
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
   
    .infos-div{
        width: 80%;
        // background-color:red;
        h1{
            font-size: 2rem;
        }
        p{
            height: 200px;
            width: 70%;
            overflow: hidden;
        }
    }
    .structure-box{
        section{
            margin-top: 15px;
            border: 1px solid rgb(252, 251, 246);
            width: 50%;
            height: 30px;
            display: flex;
            align-items: center;
            padding: 5px 15px;
            border-radius: 3px;
            cursor: pointer; 
        }
    }
    .active{
        background-color: #c17731 ;
    };
    //extra large
    @media only screen and (max-width:1200px) {
        .infos-div{
            p{
                height: 200px;
                width: 100%;
            }
        }
        .structure-box{
            section{
                width: 60%;
            }
        }
    }

    @media only screen and (max-width:992px) {
        .infos-div{
            width:50%;
            padding: 15px 54px
        }
        .structure-box{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media screen and (max-width: 768px){
        .png{
            margin-top: 70px;
            #planet{
                width:80%;
            }
        }
        .infos-div{
            text-align: center;
            width: 91%;
            padding: 15px 0px;
            p{
                height:250px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .active{
            background-color: transparent;
            border-bottom: 2px solid #c17731 !important; 
        }
        .structure-box{
            width: 100%;
            flex-direction: row;
            // border-bottom: 5px solid #fff;
            // position: sticky;
            // top: 100px;
            // right: 8px;
            // left: 8px;
            section{
                // background-color: transparent !important;
                justify-content: center;
                margin: 0;
                border:hidden;
                border-radius: 0;
            }
        }
    }
</style>