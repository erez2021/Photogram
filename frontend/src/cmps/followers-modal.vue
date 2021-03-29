
<template>
  <div class="followModal">
    <div class="modal-header">Followers</div>
    
    <div class=" followers-link" v-for="(follower ,idx) in user.followers" :key="idx">
 <a style="text-decoration: none; color: black;"   :href="`/user/${follower._id}`" class="flex-no-space"> 
      <img :src="follower.imgUrl" class="modal-img" />
      <p class="modal-names">{{ follower.fullname}}</p>
    </a> 
</div>
      </div>
 
</template>



<script>
import { storyService } from "../services/story.service";
export default {
  props: ["user"],

  methods: {
    showProfile(followerId) {
      console.log(followerId);
      this.$router.push(`/user/${followerId}`);
    },
  },
  computed: {
    followers() {
      const follower = this.user.followers.map((follower) => follower.fullname);
      console.log(this.user.followers);
      return follower.join("");
    },
    followerImg() {
      const follower = this.user.followers.map((follower) => follower.imgUrl);
      return follower;
    },
    followerId(followerId) {
      console.log(followerId)
      const follower = this.user.followers.find((follower) => follower._id === followerId);
      return follower;
    },
  },
  components: {},
};
</script>