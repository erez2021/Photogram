
<template>
    <div class="post-list">
    <div v-for="story in storys" :key="story._id" > 
        <post-details :story="story" />
  
  </div>
  </div>
</template>



<script>

import PostDetails from './post-details.vue'

export default {
// props: {
//   storys: {
//     type: Array
//   }
// },
  props: ['storys'],
  methods: {
 
  },
  computed: {
   
  },
  components: {

    PostDetails
  },

}
</script>