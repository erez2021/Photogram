<template>
  <div class="story-add-modal">
    <button class="story-close-btn" @click="closeModal">X</button>
    <form @submit.prevent="addStory" class="story-add-form">
      <input
        type="text"
        class="story-add-txt"
        v-model="newStory.txt"
        placeholder="What's your story?"
      />
      <input
        type="text"
        class="story-add-locname"
        v-model="newStory.locname"
        placeholder="Where?"
      />

      <label
        for="upload-img"
        v-if="!isLoading"
        @drop.prevent="handleFile"
        @dragover.prevent="dragOver"
        @dragleave="isDragOver = false"
        :class="{ drag: isDragOver }"
      >
        <img src="@/assets/icons/upload.png" class="cloud" />
      </label>
      <img
        v-else
        class="loading"
        src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
      />
      <input
        type="file"
        class="upload-img"
        id="upload-img"
        @change="handleFile"
        :src="newStory.imgUrl"
      />

      <div v-if="isShown" class="upload-message">Image added succesfully!</div>
      <button class="story-add-btn">ADD</button>
    </form>
  </div>
</template>
 

<script>
import { utilService } from "../services/util.service.js";
import { uploadImg } from "../services/img-upload.service.js";
export default {
  data() {
    return {
      isDragOver: false,
      isShown: false,
      isLoading: false,
      newStory: {
        _id: utilService.makeId(),
        txt: "",
        imgUrl: "",
        locname: "",
        comments: [],
        likedBy: [],
        tags: [],
      },
    };
  },
  methods: {
    addStory() {
      const story = this.newStory;
      const loggedinUser = this.loggedinUser;
      this.$store.dispatch({ type: "addStory", story, loggedinUser });
      console.log(story);
      this.$emit("closeModal");
    },
    dragOver(ev) {
      this.isDragOver = true;
    },
    handleFile(ev) {
      let file;
      if (ev.type === "change") file = ev.target.files[0];
      else if (ev.type === "drop") file = ev.dataTransfer.files[0];
      this.onUploadImg(file);
    },
    async onUploadImg(file) {
      this.isLoading = true;
      this.isDragOver = false;
      const res = await uploadImg(file);
      this.newStory.imgUrl = res.url;
      this.isLoading = false;
      this.isShown = true;
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.getLoggedinUser;
    },
  },
};
</script>