import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { httpService } from './http.service'


export const storyService = {
  getStorys,
  getById,
  remove,
  
  toggleLike,
  addComment,
  removeComment,
  addStory,

}

const storys = [
  {
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": ["https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://static.wixstatic.com/media/43b5e4_164e5bae962d44c58ad217a7bb8d32f7.jpg/v1/fill/w_560,h_512,al_c,q_80,usm_0.66_1.00_0.01/43b5e4_164e5bae962d44c58ad217a7bb8d32f7.jpg"] //Can be an array if decide to support multiple imgs
    ,"createdAt": 1616401700,
    "by": {
      "_id": "u101",
      "fullname": "Beni Berman",
      "imgUrl": "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZpZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    "loc": {
      "lat": 32.109333,
      "lng": 34.855499,

    },
    "locname": "Tel Aviv",
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u107",
          "fullname": "Bob Israel",
          "imgUrl": "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"
        },
        "txt": "good one!",
        "likedBy": [ 
          {
            "_id": "u107",
            "fullname": "Bob Israel Israel",
            "imgUrl": "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Yael Ben",
          "imgUrl": "https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/6/x628110005-11598959998.jpg"
        },
        "txt": "Thank you for such a great post, it certainly opened my eyes regarding this",
      }
    ],
    "likedBy": [
      {
        "_id": "u107",
        "fullname": "Bob Israel",
        "imgUrl": "https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"
      },
      {
        "_id": "u106",
        "fullname": "Yael Ben",
        "imgUrl": "https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/6/x628110005-11598959998.jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s102",
    "txt": "I was taking this photo in the middle of the night",
    "imgUrl": "https://cutewallpaper.org/21/view-wallpaper/100+-View-Pictures-Download-Free-Images-and-Stock-Photos-on-.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u102",
      "fullname": "Sami Cohen",
      "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png",
    },
    "loc": {
      "lat": 31.771959,
      "lng": 35.217018,
    },
    "locname": "Jerusalem",
    "comments": [
      {
        "id": "c1006",
        "by": {
          "_id": "u108",
          "fullname": "Yuval Dan",
          "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
        },
        "txt": "good one!",
        "likedBy": [ 
          {
            "_id": "u108",
            "fullname": "Yuval Dan",
            "imgUrl": "https://1ec3qk2gowcy3luxr31yisiwjdm-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/greg.jpg"
          }
        ]
      },
      {
        "id": "c1003",
        "by": {
          "_id": "u109",
          "fullname": "Ron Elias",
          "imgUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwayne-johnson-attends-the-premiere-of-universal-pictures-news-photo-1161880409-1566504158.jpg?crop=0.762xw:0.654xh;0.0698xw,0.0141xh&resize=480:*"
        },
        "txt": "Lots of love and kisses",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s103",
    "txt": "Best car ever",
    "imgUrl": "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-c4a9cdcf0a58353aa5323d397bde7f34.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u105",
      "fullname": "Jim Gordon",
      "imgUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    "loc": {
      "lat": 40.730610,
      "lng": -73.935242,
    },
    "locname": "New-York",
    "comments": [
      {
        "id": "c1020",
        "by": {
          "_id": "u105",
          "fullname": "Jim Gordon",
          "imgUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Probably one of the best!",
        "likedBy": [ 
          {
            "_id": "u103",
            "fullname": "Erez Hershkovitz",
            "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
          }
        ]
      },
      {
        "id": "c1003",
        "by": {
          "_id": "u109",
          "fullname": "Ron Elias",
          "imgUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwayne-johnson-attends-the-premiere-of-universal-pictures-news-photo-1161880409-1566504158.jpg?crop=0.762xw:0.654xh;0.0698xw,0.0141xh&resize=480:*"
        },
        "txt": "Well, this is the ideal. But it doesn't always happen like that",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s104",
    "txt": "I love traveling there. so nice!",
    "imgUrl": "https://images.theconversation.com/files/252656/original/file-20190107-32133-6lq46u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u104",
      "fullname": "Angie Berg",
      "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    "loc": {
      "lat": 34.052235,
      "lng": -118.243683,
    },
    "locname": "L.A",
    "comments": [
      {
        "id": "c1050",
        "by": {
          "_id": "u105",
          "fullname": "Jim Gordon",
          "imgUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Wow! amazing place. have fun Angie",
        "likedBy": [ 
          {
            "_id": "u103",
            "fullname": "Erez Hershkovitz",
            "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
          }
        ]
      },
      {
        "id": "c1111",
        "by": {
          "_id": "u102",
          "fullname": "Sami Cohen",
          "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
        },
        "txt": "Wowww. where is it??",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s105",
    "txt": "Could be nice traveling there, don't you think?",
    "imgUrl": "https://media.istockphoto.com/photos/hiker-man-at-the-top-of-the-mountainthis-is-a-3d-render-illustration-picture-id1089729132?k=6&m=1089729132&s=612x612&w=0&h=6N3db-V2cpUjvZlrT1wIXThCnmCbTl_-xsjFzijUDNM=", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u103",
      "fullname": "Erez Hershkovitz",
      "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
    },
    "loc": {
      "lat": 32.095,
      "lng": 34.952,
    },
    "locname": "Rosh-Haayin",
    "comments": [
      {
        "id": "c1150",
        "by": {
          "_id": "u104",
          "fullname": "Angie Berg",
          "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Wow! amazing place. have fun Erez",
        "likedBy": [ 
          {
            "_id": "u101",
            "fullname": "Beni Berman",
            "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        ]
      },
      {
        "id": "c1111",
        "by": {
          "_id": "u102",
          "fullname": "Sami Cohen",
          "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
        },
        "txt": "Yep! It's a dream..",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s106",
    "txt": "The best dessert ever",
    "imgUrl": "https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u103",
      "fullname": "Erez Hershkovitz",
      "imgUrl": "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
    },
    "loc": {
      "lat": 32.095,
      "lng": 34.952,
    },
    "locname": "Rosh-Haayin",
    "comments": [
      {
        "id": "c1150",
        "by": {
          "_id": "u104",
          "fullname": "Angie Berg",
          "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Looks Yammi!",
        "likedBy": [
          {
            "_id": "u101",
            "fullname": "Beni Berman",
            "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        ]
      },
      {
        "id": "c1111",
        "by": {
          "_id": "u102",
          "fullname": "Sami Cohen",
          "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
        },
        "txt": "Looks great",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s107",
    "txt": "Look at this.. so cute!",
    "imgUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=0.922xw:0.738xh;0.0555xw,0.142xh&resize=640:*", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u101",
      "fullname": "Beni Berman",
      "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    "loc": {
      "lat": 32.109333,
      "lng": 34.855499,
    },
    "locname": "Tel-Aviv",
    "comments": [
      {
        "id": "c1150",
        "by": {
          "_id": "u104",
          "fullname": "Angie Berg",
          "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Looks lovely!",
        "likedBy": [ 
          {
            "_id": "u101",
            "fullname": "Beni Berman",
            "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        ]
      },
      {
        "id": "c1111",
        "by": {
          "_id": "u102",
          "fullname": "Sami Cohen",
          "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
        },
        "txt": "How can I buy one like this",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s108",
    "txt": "Amazing view! nice memories..",
    "imgUrl": "https://i.pinimg.com/originals/85/cc/95/85cc95771093d2d96f91029615d6dcb7.gif", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u101",
      "fullname": "Beni Berman",
      "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    "loc": {
      "lat": 7.8789,
      "lng": 98.4,
    },
    "locname": "Tahiland, Phuket",
    "comments": [
      {
        "id": "c1150",
        "by": {
          "_id": "u104",
          "fullname": "Angie Berg",
          "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Looks lovely!",
        "likedBy": [ 
          {
            "_id": "u101",
            "fullname": "Beni Berman",
            "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        ]
      },
      {
        "id": "c1111",
        "by": {
          "_id": "u102",
          "fullname": "Sami Cohen",
          "imgUrl": "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
        },
        "txt": "How can I buy one like this",
      }
    ],
    "likedBy": [
      {
        "_id": "u112",
        "fullname": "Noa Paskal",
        "imgUrl": "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
      },
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  },
  {
    "_id": "s109",
    "txt": "Another great picture from my last diving!",
    "imgUrl": "https://image.winudf.com/v2/image/Y29tLldoYWxlV2FsbHBhcGVyRnVsbEhELmR6YWhhYmRob3dpX3NjcmVlbl82XzE1MjMwMTczMjBfMDU0/screen-6.jpg?fakeurl=1&type=.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": Date.now(),
    "by": {
      "_id": "u101",
      "fullname": "Beni Berman",
      "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    "loc": {
      "lat": 7.8789,
      "lng": 98.4,
    },
    "locname": "Tahiland, Phuket",
    "comments": [
      {
        "id": "c1122",
        "by": {
          "_id": "u104",
          "fullname": "Angie Berg",
          "imgUrl": "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "txt": "Looks lovely!",
        "likedBy": [
          {
            "_id": "u101",
            "fullname": "Beni Berman",
            "imgUrl": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        ]
      },

    ],
    "likedBy": [
      {
        "_id": "u110",
        "fullname": "Shuki Levi",
        "imgUrl": "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
      }
    ],
    "tags": ["fun", "no_filter"]
  }]



// function getStorys() {
//   return JSON.parse(JSON.stringify(storys))
// }

async function getStorys() {
  try {
    const storys = await httpService.get(`story/`)
    return storys
} catch(err) {
    console.log('cannot get storys')
}     
}

// function getById(storyId) {
//   storyId = story._id
//   return storageService.get('story', storyId)
// }

async function getById(storyId) {
  try {
      return await httpService.get(`story/${storyId}`)
  } catch(err) {
      console.log('cannot get story')
}
}


// function remove(storyId) {
//   const idx = storys.findIndex(story => story._id === storyId)
//   storys.splice(idx, 1)
// }

async function remove(storyId) {
  try {
      return await httpService.delete(`story/${storyId}`)
  } catch(err) {
      console.log('cannot delete story')
}
}

// function addStory(story, loggedinUser) {
//   const minUser = {
//     "_id": loggedinUser._id,
//     "fullname": loggedinUser.fullname,
//     "imgUrl": loggedinUser.imgUrl
//   }
//   story.by= minUser
//   storys.unshift(story)
// }

async function addStory(story, loggedinUser) {
    const minUser = {
      "_id": loggedinUser._id,
      "fullname": loggedinUser.fullname,
      "imgUrl": loggedinUser.imgUrl
    }
    story.by= minUser
    try {
      return await httpService.post(`story/`, story)
    } catch(err) {
      console.log('cannot add story')
  }
}



function toggleLike(storyId, loggedinUser) {
  const story = storys.find(story => story._id === storyId) // should I switch storys by getStorys() ?
  const minUser = {
    "_id": loggedinUser._id,
    "fullname": loggedinUser.fullname,
    "imgUrl": loggedinUser.imgUrl
  }
  const idx = story.likedBy.findIndex(item => item._id === minUser._id)
    if (idx === -1) {story.likedBy.push(minUser)
  }else {
    story.likedBy.splice(idx, 1) 
  }
}

function addComment(storyId, loggedinUser, txt) {
  const story = storys.find(story => story._id === storyId)
  const minUser =  {
    "_id": loggedinUser._id,
    "fullname": loggedinUser.fullname,
    "imgUrl": loggedinUser.imgUrl
  }
    story.comments.push({by :minUser, txt:txt})
  }

  function removeComment(commentId,storyId ) {
    const story = storys.find(story => story._id === storyId)
    const idx = story.comments.findIndex(comment => comment.id === commentId)
    story.comments.splice(idx, 1)
    console.log(story.comments.length)
  }







