
<template>
  <header >
  
     <div @click.self="closeModal"  :class="showAroundModal" class="around-modal"></div>
    <div class="top-links flex">
      <router-link
        class="link-btn-home"
        style="text-decoration=none;color:#262626;"
        :to="'/'"
        ><h3 class="logo">Photogram</h3></router-link
      >
      <div class="nav flex">
        <post-filter type="text" placeholder="search" @filtered="setFilter" />
        <router-link
          class="link-btn-home"
          style="text-decoration: none"
          :to="'/'"
          ><img class="nav-icon" :src="movePage" @click="togglePic()"
        /></router-link>
     
        <a
          class="link-btn"
          style="text-decoration: none"
          ><img src="@/assets/icons/plus.png" @click="showModal"
        /></a>
        <story-add v-if="isAddModal" @closeModal="isAddModal=null"/>
  
        <router-link
          class="link-btn"
          style="text-decoration: none"
          :to="'/user/605dde7c92321c342329d3d5'"
          ><img
            class="user-smaller-img"
            src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
        /></router-link>
      </div>
    </div>
  </header>
</template>


<script>
import storyAdd from "@/cmps/story-add.vue"
import postFilter from "./post-filter.vue"

export default {
  components: { postFilter },
  data() {
    return {
      isAddModal: null,
      filterBy: {
        txt: "",
      },
      isHomepage: true,
    };
  },
  computed: {
    storysForDisplay() {
      return this.$store.getters.storysForDisplay;
    },
    movePage() {
      var img1 = require("@/assets/icons/home1.svg");
      var img2 = require("@/assets/icons/newhome.png");
      return this.isHomepage ? img2 : img1;
    },
    showAroundModal () {
      return {'show-around-modal' : !this.isAddModal}
    }
  },
  methods: {
    setFilter(filterBy) {
      this.$store.commit({ type: "setFilter", filterBy });
    },
    togglePic() {
      const params = this.$route.params
      console.log(params)
      if (!params.id)   this.isHomepage = true
    },
    showModal() {
      console.log('is show modal')
      this.isAddModal= !this.isAddModal 
  },
  closeModal() {
    this.isAddModal = false
  }
  },
  created() {

  },
  components: {
    postFilter,
    storyAdd
  },
};
</script>