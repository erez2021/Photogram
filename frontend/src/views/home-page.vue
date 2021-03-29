<template>
  <div class="home">
        <div class="home-card">
  <post-list :storys="storysForDisplay" />
  </div>
  </div>
</template>

<script>
import postList from '../cmps/post-list.vue'




export default {
   data() {
    return {
    storys: null
    }
   },
    computed: {
          storysForDisplay() {
    return this.$store.getters.storysForDisplay

   },
},

methods: {

  
},
  components: {
    postList,
    
  },
  
    created() {
     
 
    
  }
  
}
</script>
