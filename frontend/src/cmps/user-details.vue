
<template>
  <div class="user-details flex-no-space">
    <div class="user-avatar">
      <img :src="user.imgUrl" />
    </div>
    <div class="user-info flex-vertical">
      <div class="user-name">{{ user.username }}</div>
      <div class="user-activities flex">
        <div class="user-posts">{{ postsLength }} posts</div>

       

        <div class="user-followers" @click="followersModal">
          {{ user.followers.length }} followers
        </div>
        <followers-modal v-if="isFollowersModal" :user="user" />
        <div class="user-followers" @click="followingModal">
          {{ user.following.length }} following
        </div>
        <following-modal v-if="isFollowingModal" :user="user" />
      </div>
      <div class="user-fullname">{{ user.fullname }}</div>
    </div>
  </div>
</template>



<script>
import postPreview from "./post-preview.vue";
import FollowersModal from "./followers-modal.vue";
import FollowingModal from "./following-modal.vue";

export default {
  props: ["user"],
  data() {
    return {
      isFollowersModal: false,
      isFollowingModal: false,
    };
  },
computed: {
  getStorys() {
  return this.$store.getters.getStorys
},
  postsLength() {
    const storys = this.getStorys
    const story = storys.filter(story => story.by._id === this.user._id)
    console.log(story.length)
    return story.length

  },
 
},
  methods: {
    followersModal() {
      this.isFollowersModal = !this.isFollowersModal;

    },
    followingModal() {
      this.isFollowingModal = !this.isFollowingModal;
    },
    showModal() {
      return { 'show-modal': !this.isFollowersModal };
    },
    closeModal() {
      this.isFollowersModal = false;
    },
  },
  created() {
    const params = this.$route.params;
    console.log('params' ,params);
  },
  
  
  components: {
    postPreview,
    FollowersModal,
    FollowingModal,
  },
};
</script>
    FollowersModal