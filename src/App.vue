<template>
    <div class="container">
        <Navbar :class="{'scrolled-navbar': isScrolling}"/>
        <div class="router-view-box">
            <router-view ></router-view>
        </div>
        <!-- <div style="min-height:100vh"></div> -->
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    export default {
      components: { Navbar },
      data() {
          return {
              isScrolling: false
          }
      },
      mounted(){
        window.addEventListener('scroll',() => {
           if(Math.round(window.scrollY) >= 200){
               this.isScrolling = true
           }else{
               this.isScrolling = false
           }
        })
      }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        // box-sizing: border-box;
        // padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    .container{
        box-sizing: border-box;
        margin: 0;
        background-color: #070625;
        min-height: 98vh;
    }
    .scrolled-navbar{
        position: fixed;
        background-color: #070625;
        top: 0;
        right: 8px;
        left: 8px;
        z-index: 1000;
    }
    @media screen and (max-width:992px){
        .router-view-box{
            margin-top: 70px;
        }
    }
    @media screen and (max-width:768px){
        .router-view-box{
            margin-top: 0px;
        }
    }
</style>