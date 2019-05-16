<template>
    <div style="height:100%;width:100%;">

        <div class="bottom-menu">
            <div  v-for="(item,idx) in label.bottomMenu":class="['menu-item',currentMenu==idx? 'active':'']" @click="changeMenu(idx)"> 
                <span :class="['menu-icon','menu-icon'+idx]"></span>
                <span class="menu-text">{{getLangText(item)}}</span>
            </div>
        </div>

    </div>
</template>
<script>
import Label from "@/components/util/label.js";
export default {
    name:'Home',
    data(){
        return {
            label:Label.home,
            currentMenu:0
        };
    },
    methods:{
        changeMenu(idx){
            this.currentMenu=idx;
        }
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
@import '@/style/config.scss';
.bottom-menu{
    position: fixed;
    bottom: 0;
    
    width: 100%;
    display: flex;
    background-color: white;
    flex-direction: row;
    .menu-item{
        flex:1;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2vw;
        .menu-icon{
            display: inline-block;
            height:6vw;
            width:6vw;
        }
        .menu-icon0{
            
            content: url($imgPath+'message.svg') ;
        }
        .menu-icon1{
            content: url($imgPath+'work.svg') ;
        }
        .menu-icon2{
            content: url($imgPath+'user.svg');
        }
        .menu-text{
            font-size: 3vw;
            color: #8a8a8a;
        }
    }
    .menu-item.active{
        
         .menu-icon0{
            
            content: url($imgPath+'message1.svg') ;
        }
        .menu-icon1{
            content: url($imgPath+'work1.svg') ;
        }
        .menu-icon2{
            content: url($imgPath+'user1.svg');
        }
        .menu-text{
            color:#9400D3;
        }
    }
}
</style>
