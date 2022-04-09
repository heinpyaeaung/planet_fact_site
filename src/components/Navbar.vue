<template>
    <div class="navbar-container">
        <div class="siteName">
            <h2>THE PLANETS</h2>
        </div>
        <div class="nav-links-container">
            <ul :class="{showNav:isShowNavsLinks}">
                <li><router-link :to="{name: 'Mercury'}">MERCURY</router-link></li>
                <li><router-link :to="{name: 'Venus'}">VENUS</router-link></li>
                <li><router-link :to="{name: 'Earth'}">EARTH</router-link></li>
                <li><router-link :to="{name: 'Mars'}">MARS</router-link></li>
                <li><router-link :to="{name: 'Jupiter'}">JUPITER</router-link></li>
                <li><router-link :to="{name: 'Saturn'}">SATURN</router-link></li>
                <li><router-link :to="{name: 'Uranus'}">URANUS</router-link></li>
                <li><router-link :to="{name: 'Neptune'}">NEPTUNE</router-link></li>
            </ul>
            <div :class="{hambarger:true, open:isOpenNavs}" @click="showNavsLinks">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['isScrolling'],
        data() {
            return {
                isShowNavsLinks:false,
                isOpenNavs:false
            }
        },
        mounted () {
            window.addEventListener('scroll', () => {
                if(window.scrollY){
                    this.isShowNavsLinks = false
                    this.isOpenNavs = false
                }
            })
        },
        methods: {
            showNavsLinks() {
                this.isShowNavsLinks = !this.isShowNavsLinks
                this.isOpenNavs = !this.isOpenNavs
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar-container{
        .siteName{
            // width: 30%;
            h2{
                    font-weight: bold;
                    letter-spacing: 3px;
            }
        }
        border-bottom: 0.5px thin rgb(252, 251, 246);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        padding: 5px 20px;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;       
        color: rgb(252, 251, 246);
        .nav-links-container{
            ul{
                li{
                    display: inline-block;
                    margin-left: 20px;
                    a{
                        text-decoration: none;
                        color: rgb(252, 251, 246);
                    }
                }
            }
            .hambarger{
                display: none;
                .line{
                    height: 3px;
                    width: 35px;
                    background-color: rgb(252, 251, 246);
                    margin: 8px 0;
                    animation-duration: 1s;
                }
            }
        }
    }

    //custom css
    .showNav{
        display: block !important;
    }
    .open {
        .line{
            position:relative
        }
        .line-1{
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            top: 9px;
            // left: 8px;
        }
        .line-2{
            width: 0%;
            opacity: 0;
        }
        .line-3{
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            top: -13px;
            // left: 8px;
        }
    }

    
    //For responsive
    @media only screen and (max-width:992px) {
        .navbar-container{
            padding: 20px 0px;
            .siteName{
                width:100%;
                text-align: center;
                // margin-bottom: 20px;
            }  
            
            .nav-links-container{
                width: 100%;
                text-align: center;
                ul{
                    padding:0;
                    li{
                        margin: 0 10px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width:768px){
        .navbar-container{
            padding: 5px 10px;
            justify-content: space-between;
            flex-wrap: nowrap;
            .siteName{
                // width: 85%;
                text-align: start;
                margin: 0;
                letter-spacing: normal;
            }
            .nav-links-container{ 
                width: auto;
                text-align: end;
                ul{
                    animation-duration: 0.5s;
                    animation-name: animatedNav;
                    display: none;
                    position: fixed;
                    text-align: center;
                    li{
                        display: block;
                        margin: 5% 0;
                        box-sizing: border-box;
                    }
                    top: 70px;
                    right: 9px;
                    left: 8px;
                    height: auto;
                    background-color: #070625;
                    padding: 15px 0;
                }
                // width: 15%;
                .hambarger{
                    display: block;
                }
            }
        }
    }
    @keyframes animatedNav {
        from{
            opacity: 0.1;
        }
        to{
            opacity: 1;
        }
    }
</style>