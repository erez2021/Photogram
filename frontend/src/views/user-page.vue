<template>
  <div class="user-page">
    <user-details :user="user" />
    <div class="activities-panel flex-space-around">
      <p class="panel-posts btn">POSTS</p>
    </div>

    <user-post-list :user="user" />
  </div>
</template>

<script>
import { utilService } from "../services/util.service.js";
import { userService } from "../services/user.service.js";
import userPostList from "../cmps/user-post-list.vue";
import userDetails from "../cmps/user-details.vue";

export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    usersForDisplay() {
      return this.$store.getters.usersForDisplay;
    },
  },

  components: {
    userDetails,
    userPostList,
  },

  async created() {
    const user = await userService.getById(this.$route.params.id);
    console.log('user user page', user);
    this.user = user;
    console.log("user", this.user, this.$route.params);
  },
};
</script>
