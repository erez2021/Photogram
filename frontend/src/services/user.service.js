import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'




const users = [{
    "_id": "u101",
    "username": "BeniB",
    "password": "Beni123",
    "fullname": "Beni Berman",
    "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u108",
        "fullname": "Yuval Dan",
        "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
      }
    ],
    "followers": [
      {
        "_id": "u103",
        "fullname": "Erez Hershkovitz",
        "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      },
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "savedPostIds": ["s103", "s106", "s105"]
  },
  {
    "_id": "u102",
    "username": "SamiN",
    "password": "Sami123",
    "fullname": "Sami Nagar",
    "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u108",
        "fullname": "Yuval Dan",
        "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "savedPostIds":["s103", "s106", "s105"]
  },
  {
    "_id": "u103",
    "username": "ErezH",
    "password": "Erez123",
    "fullname": "Erez Hershkovitz",
    "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u108",
        "fullname": "Yuval Dan",
        "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
      },
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "savedPostIds": ["s103", "s101", "s107"]
  },
  {
    "_id": "u104",
    "username": "AngieB",
    "password": "Angie123",
    "fullname": "Angie Berg",
    "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u108",
        "fullname": "Yuval Dan",
        "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
      },
      {
        "_id": "u106",
        "fullname": "Yael Ben",
        "imgUrl": "https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/6/x628110005-11598959998.jpg"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "savedPostIds": ["s103", "s101", "s107"]
  },
  {
    "_id": "u105",
    "username": "JimG",
    "password": "Jim123",
    "fullname": "Jim Gordon",
    "imgUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u103",
        "fullname": "Erez Hershkovitz",
        "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      },
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      },
      {
        "_id": "u106",
        "fullname": "Yael Ben",
        "imgUrl": "https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/6/x628110005-11598959998.jpg"
      }
    ],
    "savedPostIds": ["s103", "s102", "s106"]
  },
  {
    "_id": "u106",
    "username": "YaelB",
    "password": "Yael123",
    "fullname": "Yael Ben",
    "imgUrl": "https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/6/x628110005-11598959998.jpg",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u108",
        "fullname": "Yuval Dan",
        "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
      },
      {
        "_id": "u103",
        "fullname": "Erez Hershkovitz",
        "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      },
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      },
      {
        "_id": "u107",
        "fullname": "Bob Israel",
        "imgUrl": "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"
      },
    ],
    "savedPostIds":["s103", "s102", "s106"]
  },
  {
    "_id": "u107",
    "username": "BobSfog",
    "password": "Bob123",
    "fullname": "Bob Israel",
    "imgUrl": "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u103",
        "fullname": "Erez Hershkovitz",
        "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      },
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
    ],
    "savedPostIds": ["s103", "s104", "s107"]
  },
  {
    "_id": "u108",
    "username": "YuvalD",
    "password": "Yuval123",
    "fullname": "Yuval Dan",
    "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u103",
        "fullname": "Erez Hershkovitz",
        "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      }
    ],
    "followers": [
      {
        "_id": "u101",
        "fullname": "Beni Berman",
        "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      },
      {
        "_id": "u103",
        "fullname": "Erez Hershkovitz",
        "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      }
    ],
    "savedPostIds": ["s103", "s104", "s107"]
  }]

  
export const userService = {
    getUsers,
    getById,
    getUser,
    getLoggedinUser,
}

// function getLoggedinUser() {
//     const user = users.find(user => user._id === 'u103')
//     console.log(user)
//     return user
// }

async function getLoggedinUser() {  // get from session storage
  try {
    const user = await httpService.get('user/605dde7c92321c342329d3d5')
    console.log('here is loggedinUser', user)
    return user
  } catch (err) {
    console.log('can\'t get loggedinUser')
  }
}

// function getUser() {
//     return user
// }

async function getUser(user) {
  try {
      user =  await httpService.get('user/', user)
      return user
  } catch(err) {
      console.log('can\'t get user');
  }
}

// function getUsers() {
//     return users
// }

async function getUsers() {
  try {
    const Users = await httpService.get(`user/`)
    return Users
} catch(err) {
    console.log('cannot get Users')
}     

}


// function getById(userId) {
//     const user = users.find(user => user._id === userId)
//     return user
// }

async function getById(userId) {
  console.log('userId' ,userId)
  try {
      return await httpService.get(`user/${userId}`)
  } catch(err) {
      console.log('cannot get user')
}
}



// function _saveLocalUser(user) {
//     sessionStorage.setItem('loggedinUser', JSON.stringify(user))
//     return user
// }

// function getLoggedinUser() {
//     return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
// }

