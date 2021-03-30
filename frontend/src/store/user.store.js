
import {userService} from '../services/user.service.js'



export const userStore = {

  state: {
    users:[] ,
    loggedinUser: {}
   
  },

  mutations: {
    setUsers(state, payload) {
        state.users = payload.users
        console.log('state.users', state.users)
      },
      setLoggedinUser(state,{loggedinUser}) {
        console.log('user mutationsssss',loggedinUser);
         state.loggedinUser = loggedinUser 
      }
      },
    getters: {
        usersForDisplay(state) {
            console.log('users' ,state.users)
            return state.users
          },
          getLoggedinUser(state) {
            console.log('state.loggedinUser',state.loggedinUser)
            return state.loggedinUser
          },
          loggedinUserSavedPosts(state) {
            console.log('state.loggedinUserSavedPosts',state.loggedinUser.savedPostIds)
            return state.loggedinUser.savedPostIds
          }
    },
  actions: {
    async loadUsers(context) {
        const users = await userService.getUsers()
        context.commit({
          type: 'setUsers',
          users
        })
      },
      async loggedinUser(context) {
        console.log('set loged in user');
        const user = await userService.getLoggedinUser()
        console.log('user store', user);
        context.commit({type: 'setLoggedinUser',loggedinUser: user})
      }
  },


}

