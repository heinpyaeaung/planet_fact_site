<template>
    <div class="info-box">
        <p>{{des.toUpperCase()}}</p>
        <h3>{{data.toUpperCase()}}</h3>
    </div>
</template>

<script>
    export default {
        props: ['des','data'],
        
    }
</script>

<style lang="scss" scoped>
    .info-box{
        height: auto;
        width: 220px;
        border: 1px solid #ffff;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px;
        // padding-left:20px;
        padding: 5px 0 5px 10px;
        border-radius: 3px;
        h3{
            margin: 10px 0;
            letter-spacing: 1px;
        }
        p{
            margin: 10px 0;
            font-weight: bold;
            color: rgb(197, 197, 197);
        }
    }
    @media screen and (max-width:768px) {
        .info-box{
            width: 80%;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
        }
    }
</style>