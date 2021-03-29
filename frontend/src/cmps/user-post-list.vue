
<template>
  <div class="cards-container">
    <div
      class="post-card ratio-img"
      v-for="(story, idx) in showStorys"
      :key="idx"
    >
      <img :src="story.imgUrl" @click="showStory(story._id)" class="btn" />
    </div>
     <div @click.self="closeModal"  :class="showAroundModal" class="around-modal"></div>
    <div
      v-if="showModal"
      class="story-details-modal"
      @click.self="showModal = null"
    >
      <div class="large-modal-img" @click.self="showModal = null">
        <img :src="story.imgUrl" />
      </div>
      <div class="user-details-modal">
        <div class="user-details-modal-header">
          <button
            class="user-details-close no-border"
            @click="showModal = null"
          >
            X
          </button>
          <div class="left-header flex-no-space">
            <img :src="user.imgUrl" class="user-small-img" />
            <div class="user-details-modal-fullname">{{ user.username }}</div>
          </div>
        </div>
        <div class="user-details-modal-comments">
          <div class="flex-no-space">
            <img :src="user.imgUrl" class="user-small-img" />
            <div class="flex-no-center modal-top">
              <div class="user-details-modal-fullname">{{ user.username }}</div>
              <div class="user-details-modal-txt">: {{ story.txt }}</div>
            </div>
          </div>
          <div v-for="comment in story.comments" :key="comment._id">
            <div class="post-details-comments in-modal flex-no-space">
              <div><img class="user-small-img" :src="comment.by.imgUrl" /></div>

              <div class="flex-no-space">
                <div class="user-details-modal-comment">
                  {{ comment.by.fullname }}:
                </div>
                <div class="user-details-modal-txt">
                  {{ comment.txt }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-details-modal-footer flex-vertical">
          <div class="user-details-actions">
            <img :src="likeImgUrl" @click="toggleLike(story._id)" class="btn" />
            <div>{{ story.likedBy.length }} likes</div>
          </div>
          <div>
            <form
              @submit.prevent="addComment(story._id)"
              class="post-form flex"
            >
              <input
                type="text"
                class="user-details-modal-input no-border"
                v-model="comment.txt"
                placeholder="Add a comment.."
                @input="isActive = true"
              />
              <button class="post-btn" :class="{ active: isActive }">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { userService } from "../services/user.service";

export default {
  props: {
    user: {
      type: Promise,
    },
  },
  data() {
    return {
      showModal: false,
      story: null,
      comment: {
        txt: "",
      },
      isLiked: false,
      isActive: false,
    };
  },

  methods: {
    showStory(storyId) {
      this.showModal = !this.showModal;
      const story = this.getStorys.find((story) => story._id === storyId);
      console.log(story);
      return (this.story = story);
    },
    toggleLike(storyId) {
      this.isLiked = !this.isLiked;
      const loggedinUser = this.loggedinUser;
      this.$store.dispatch({ type: "toggleLike", storyId, loggedinUser });
      const story = this.getStorys.find((story) => story._id === storyId);
      return (this.story = story);
    },
    addComment(storyId) {
      if (this.story.comments.length === 4) return;
      const txt = this.comment.txt;
      const loggedinUser = this.loggedinUser;
      this.$store.dispatch({ type: "addComment", storyId, loggedinUser, txt });
      this.comment.txt = "";
      this.isActive = false;
      const story = this.getStorys.find((story) => story._id === storyId);
      return (this.story = story);
    },
    async loggedinUser() {
      await this.$store.dispatch({
        type: "loggedinUser",
        loggedinUser: this.loggedinUser,
      });
    },
    async users() {
      await this.$store.dispatch({ type: "loadUsers", users: this.users });
    },
       closeModal() {
      this.showModal = false
    },
  },
  computed: {
    showStorys() {
      const storys = this.getStorys.filter(
        (story) => story.by._id === this.user._id
      );
      return storys;
    },
    showAroundModal() {
      return { "show-around-modal": !this.showModal };
    },
 
    likeImgUrl() {
      var img1 = require("@/assets/icons/heart.png");
      var img2 = require("@/assets/icons/redheart.png");
      return this.isLiked ? img2 : img1;
    },
    getDate() {
      // return moment(this.story.createdAt.at).fromNow()
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      return today.toDateString();
    },
    loggedinUser() {
      return this.$store.getters.getLoggedinUser;
    },
    getStorys() {
      return this.$store.getters.getStorys;
    },
  },

  created() {
    const user = userService.getById(this.$route.params.id);
    this.user = user;
  },
};
</script>