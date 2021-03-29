
  <template>
  <div class="post-details">
    <div class="post-details-header">
      <img
        @click="openRemoveModal = true"
        class="remove-btn flex"
        src="@/assets/icons/dots.png"
      />
       <div @click.self="closeModal"  :class="showAroundModal" class="around-modal"></div>
      <div v-if="openRemoveModal" class="remove-modal center">
        <div @click="removeStory(story._id)" class="remove-post">
          Remove Post
        </div>
        <div @click="openRemoveModal = null" class="cancel">Cancel</div>
      </div>
      <div class="user-post-details">
        <img
          @click="showProfile(story.by._id)"
          class="user-small-img btn"
          :src="story.by.imgUrl"
        />
        <div class="header-text flex-vertial">
          <div class="btn" @click="showProfile(story.by._id)">
            {{ story.by.fullname }}
          </div>

          <gmap-map :pos="pos" v-if="showMap" />

          <div class="post-location btn" @click="showLocation(story.loc)">
            {{ story.locname }}
          </div>
        </div>
      </div>
    </div>
    <div class="post-details-image">
      <img class="home-img  ratio-img" :src="story.imgUrl" />
    </div>
    <div class="post-details-actions flex">
      <img :src="likeImgUrl" @click="toggleLike(story._id)" class="btn" />
      <img
        :src="toggleSavePic"
        @click="savePost(story._id)"
        class="save-post btn"
      />
    </div>
    <div class="post-details-likes">
      <div>{{ story.likedBy.length }} likes</div>
    </div>
    <div class="post-details-lines">{{ story.txt }}</div>
    <div v-for="comment in story.comments" :key="comment._id">
      <div class="post-details-comments-father flex">
        <div class="post-details-comments flex-no-space">
          <div class="user-comment">{{ comment.by.fullname }}</div>
          <div class="user-comment-wrap">: {{ comment.txt }}</div>
        </div>
        <button
          @click="removeComment(comment.id, story._id)"
          class="remove-comment-btn"
        >
          X
        </button>
      </div>
    </div>
    <div class="post-details-date">{{ getDate }}</div>
    <div class="post">
      <form @submit.prevent="addComment(story._id)" class="post-form flex">
        <VueEmoji
          ref="emoji"
          @input="onInput"
          @change="isActive = true"
          type="text"
          class="post-details-input"
          :value="comment.txt"
          placeholder="Add a comment.."
        />

        <button class="post-btn" :class="{ active: isActive }">Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import { storyService } from "../services/story.service.js";
import { userService } from "../services/user.service.js";
import gmapMap from "./gmap-map.vue";
import VueEmoji from "emoji-vue";

export default {
  props: {
    story: {
      type: Object,
    },
  },
  data() {
    return {
      isBlur : false,
      openRemoveModal: false,
      showMap: false,
      user: null,
      pos: { lat: 32.109333, lng: 34.855499 },
      comment: {
        txt: "",
      },
      isLiked: false,
      isActive: false,
      isSaved: false,
    };
  },
  methods: {
    savePost(storyId) {
      this.isSaved = !this.isSaved;
      console.log(storyId);
      const loggedinUserPosts = this.getLoggedinUserSavedPosts;
      this.$store.dispatch({ type: "savePost", storyId, loggedinUserPosts });
    },
    removeComment(commentId, storyId) {
      this.$store.dispatch({ type: "removeComment", commentId, storyId });
    },
    showProfile(userId) {
      this.$router.push(`/user/${userId}`);
    },
    toggleLike(storyId) {
      this.isLiked = !this.isLiked;
      const loggedinUser = this.loggedinUser;
      this.$store.dispatch({ type: "toggleLike", storyId, loggedinUser });
    },
    addComment(storyId) {
      if (this.story.comments.length === 4) return;
      const txt = this.comment.txt;
      const loggedinUser = this.loggedinUser;
      this.$store.dispatch({ type: "addComment", storyId, loggedinUser, txt });
      this.comment.txt = "";
      this.isActive = false;
    },
    removeStory(storyId) {
      this.$store.dispatch({ type: "removeStory", storyId });
    },
    showLocation(pos) {
      this.showMap = !this.showMap;
      this.pos = pos;
    },
    onInput(event) {
      event.data;
      this.comment.txt = event.data;
      this.isActive = true;
    },
    clearTextarea() {
      this.$refs.emoji.clear();
    },
  },

  computed: {
       showAroundModal () {
      return {'show-around-modal' : !this.openRemoveModal}
    },
      closeModal() {
    this.openRemoveModal = false
  },
    getLoggedinUserSavedPosts() {
      return this.$store.getters.loggedinUserSavedPosts;
    },
    toggleSavePic() {
      var img1 = require("@/assets/icons/savewhite.png");
      var img2 = require("@/assets/icons/save.png");
      return this.isSaved ? img2 : img1;
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
  },
  created() {
    const user = userService.getById(this.$route.params.userId);
    this.user = user;
   
  },
  components: {
    storyService,
    gmapMap,
    VueEmoji,
  },
};
</script>
