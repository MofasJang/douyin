<template>
    <div class="indexwrap">
        <top-bar />
        <router-view />
    </div>
</template>
<script>
import TopBar from '../../components/index/TopBar'
export default {
    data(){
        return{

        }
    },
    components:{
        TopBar
    }
}
</script>
<style scoped>
    .indexwrap{
        height: 100%;
    }
</style>>
