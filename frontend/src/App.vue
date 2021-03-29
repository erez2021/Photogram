<template>
  <div id="app" class="main-layout">
   
    <app-header class="header main-layout full">  </app-header>
   
    <router-view/>

    <app-footer class="footer" v-if="['homePage'].includes($route.name)" /> 
    
  </div>
</template>

<script>
import appHeader from '../src/cmps/app-header.vue'
import appFooter from '../src/cmps/app-footer.vue'
export default {


 components: {
    appHeader,
    appFooter
  },
  created() {
 this.$store.dispatch({type: "loadStorys"})
 this.$store.dispatch({type: "loadUsers"})
}
}

</script>


