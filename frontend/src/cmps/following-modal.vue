
<template>
  <div class="followModal">
    <div  class="modal-header">Following</div>
<div class="following-link"  v-for="(follow ,idx) in user.following" :key="idx" >
   <a style="text-decoration: none; color: black;"   :href="`/user/${follow._id}`" class="flex-no-space"> 
        <img :src="follow.imgUrl" class="modal-img" />
        <p class="modal-names">{{ follow.fullname }}</p>
        </a>
      </div>
    </div>
  
</template>



<script>
export default {
  props: ["user"],

  methods: {
 
  },
  computed: {
    followings() {
      const follow = this.user.following.map((follow) => follow.fullname);
      console.log(this.user.following);
      return follow.join("");
    },
    followingImg() {
      const follow = this.user.following.map((follow) => follow.imgUrl);
      return follow;
    },
    followId(followId) {
      const follow = this.user.following.find((follow) => follow._id === followId);
      return follow;
    },
  },
  components: {},
};
</script>