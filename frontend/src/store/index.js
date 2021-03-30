import Vue from 'vue'
import Vuex from 'vuex'
import { storyService } from '../services/story.service.js'
import { userStore } from './user.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    storys: [],
    filterBy: {
      txt: ''
    },
  
  },

  mutations: {
    // getStorys(state, {storys}) {
    //   return state.storys
    // },
    setStorys(state, payload) {
      state.storys = payload.storys
    },
    addLike(state, { user }) {
      state.storys[0].likedBy.push(user)
      console.log(state.storys[0].likedBy)
    },
    addStory(state, {story}) {
      state.storys.unshift(story)
    },
  removeComment(state, {commentId, storyId}) {
    const story = state.storys.find(story => story._id === storyId)
    const idx = story.comments.findIndex(comment => comment.id === commentId)
    story.comments.splice(idx, 1)
    
  },
 
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  getters: {
    storysForDisplay(state) {
      if (state.filterBy.txt === '') return state.storys
      const checkTxt = state.filterBy.txt.toLowerCase()
      return state.storys.filter(story => {
        return story.txt.toLowerCase().includes(checkTxt)
      })
    },
    getStorys(state) {
      return state.storys
    }
    
  },
  actions: {
   async loadStorys(context) {
      const storys = await storyService.getStorys()
      context.commit({
        type: 'setStorys',
        storys
      })
    },
    async addStory({dispatch}, {story ,loggedinUser}) {
      await storyService.addStory(story ,loggedinUser)
      dispatch({type: 'loadStorys'})
    },
    async removeStory({dispatch}, {storyId}) {
      await storyService.remove(storyId)
      dispatch({type: 'loadStorys'})
    },
    async toggleLike({ dispatch}, {storyId, loggedinUser}) {
      await storyService.toggleLike(storyId, loggedinUser)
      dispatch({type: 'loadStorys'})
    },
    async addComment({dispatch}, {storyId, loggedinUser, txt}) {
      console.log('from store loggedinUser:',loggedinUser)
      await storyService.addComment(storyId, loggedinUser, txt)
      dispatch({type: 'loadStorys'})
    },
    async removeComment(context, {commentId, storyId}) {
      console.log('commentId,  storyId' ,commentId, storyId)
     await storyService.removeComment(commentId, storyId)
      context.commit({type: 'removeComment', commentId, storyId})
     
    }
    
  },
  modules: {
    userStore
  }
})

