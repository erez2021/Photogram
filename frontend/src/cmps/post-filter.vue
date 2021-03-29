<template>
    <div class="">   
        <input type="text"  placeholder="search post" v-model="filterBy.txt" @input="setFilter" class="header-input"><p></p>
       </div> 
</template>

 

<script>
export default {
      data() {
        return {
            filterBy: {
               txt:''
           
            }
        }
    },
    methods:{
        setFilter(){
            this.$emit('filtered', {...this.filterBy}) 
           
        }
    }
}
</script>