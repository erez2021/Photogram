
<template>
  <div class="cards-container" > 
    <div class="post-card"  >
  <img  >
      </div>
   
  </div>
</template>



<script>

export default {
      props: ['user'],
  
  methods: {
   
  },
  computed: {
  getLoggedinUserSavedPosts() {
    return this.$store.getters.loggedinUserSavedPosts
  },
  },
  components: {
 

}
}
</script>