<template>
    <div class="header">
        <div class="header-first">
            <div class="header-first-left">
                
            </div>
            <div class="header-first-center"></div>
            <div class="header-first-right"></div>
        </div>
        <div class="header-second"></div>
    </div>
</template>

<script>
export default {
    name:'CommonHeader',
    data() {
        return {
            
        }
    },
    methods:{
    }
}
</script>


<style lang="scss" scoped>
.header{
    width: 100%;
    &-first{
        width: 100%;
        height: 70px;
        background-color: black;
    }
    &-second{
        width: 100%;
        height: 34px;
        background-color: red;
    }
}
</style>
