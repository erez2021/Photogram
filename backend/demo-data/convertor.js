const ObjectId = require('mongodb').ObjectId




const dataBeforeConvert = [
    {
        "_id" : ObjectId("605df51d92321c342329d3df"),
        "txt" : "Best car ever",
        "imgUrl" : "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-c4a9cdcf0a58353aa5323d397bde7f34.jpg",
        "createdAt" : 1616770333298.0,
        "by" : {
            "_id" : ObjectId("605dde7c92321c342329d3d7"),
            "fullname" : "Jim Gordon",
            "imgUrl" : "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        "loc" : {
            "lat" : 40.73061,
            "lng" : -73.935242
        },
        "locname" : "New-York",
        "comments" : [ 
            {
                "id" : "c1020",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d7"),
                    "fullname" : "Jim Gordon",
                    "imgUrl" : "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                },
                "txt" : "Probably one of the best!",
                "likedBy" : [ 
                    {
                        "_id" : ObjectId("605dde7c92321c342329d3d5"),
                        "fullname" : "Erez Hershkovitz",
                        "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
                    }
                ]
            }, 
            {
                "by" : {
                    "_id" : "605dde7c92321c342329d3d5",
                    "fullname" : "Erez Hershkovitz",
                    "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
                },
                "txt" : "WOw! great car!",
                "storyId" : "605df51d92321c342329d3df",
                "id" : "Cz7M3T"
            }
        ],
        "likedBy" : [ 
            {
                "_id" : "u112",
                "fullname" : "Noa Paskal",
                "imgUrl" : "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
            }, 
            {
                "_id" : "u110",
                "fullname" : "Shuki Levi",
                "imgUrl" : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            }
        ],
        "tags" : [ 
            "fun", 
            "no_filter"
        ]
    },
    {
        "_id" : ObjectId("605df51d92321c342329d3e1"),
        "txt" : "Could be nice traveling there, don't you think?",
        "imgUrl" : "https://media.istockphoto.com/photos/hiker-man-at-the-top-of-the-mountainthis-is-a-3d-render-illustration-picture-id1089729132?k=6&m=1089729132&s=612x612&w=0&h=6N3db-V2cpUjvZlrT1wIXThCnmCbTl_-xsjFzijUDNM=",
        "createdAt" : 1616770333298.0,
        "by" : {
            "_id" : ObjectId("605dde7c92321c342329d3d5"),
            "fullname" : "Erez Hershkovitz",
            "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
        },
        "loc" : {
            "lat" : 32.095,
            "lng" : 34.952
        },
        "locname" : "Rosh-Haayin",
        "comments" : [ 
            {
                "by" : {
                    "_id" : "605dde7c92321c342329d3d5",
                    "fullname" : "Erez Hershkovitz",
                    "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
                },
                "txt" : "great view!",
                "storyId" : "605df51d92321c342329d3e1",
                "id" : "gT3ypa"
            }, 
            {
                "by" : {
                    "_id" : "605dde7c92321c342329d3d5",
                    "fullname" : "Erez Hershkovitz",
                    "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
                },
                "txt" : "????",
                "storyId" : "605df51d92321c342329d3e1",
                "id" : "GKKZcl"
            }
        ],
        "likedBy" : [ 
            {
                "_id" : "u112",
                "fullname" : "Noa Paskal",
                "imgUrl" : "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
            }, 
            {
                "_id" : "u110",
                "fullname" : "Shuki Levi",
                "imgUrl" : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            }
        ],
        "tags" : [ 
            "fun", 
            "no_filter"
        ]
    },
    {
        "_id" : ObjectId("605df51d92321c342329d3e2"),
        "txt" : "The best dessert ever",
        "imgUrl" : "https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg",
        "createdAt" : 1616770333298.0,
        "by" : {
            "_id" : ObjectId("605dde7c92321c342329d3d5"),
            "fullname" : "Erez Hershkovitz",
            "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
        },
        "loc" : {
            "lat" : 32.095,
            "lng" : 34.952
        },
        "locname" : "Rosh-Haayin",
        "comments" : [ 
            {
                "id" : "c1150",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d6"),
                    "fullname" : "Angie Berg",
                    "imgUrl" : "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                },
                "txt" : "Looks Yammi!",
                "likedBy" : [ 
                    {
                        "_id" : ObjectId("605dde7c92321c342329d3d3"),
                        "fullname" : "Beni Berman",
                        "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                ]
            }, 
            {
                "id" : "c1111",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d4"),
                    "fullname" : "Sami Cohen",
                    "imgUrl" : "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
                },
                "txt" : "Looks great"
            }
        ],
        "likedBy" : [ 
            {
                "_id" : "u112",
                "fullname" : "Noa Paskal",
                "imgUrl" : "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
            }, 
            {
                "_id" : "u110",
                "fullname" : "Shuki Levi",
                "imgUrl" : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            }
        ],
        "tags" : [ 
            "fun", 
            "no_filter"
        ]
    },
    {
        "_id" : ObjectId("605df51d92321c342329d3e3"),
        "txt" : "Look at this.. so cute!",
        "imgUrl" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=0.922xw:0.738xh;0.0555xw,0.142xh&resize=640:*",
        "createdAt" : 1616770333298.0,
        "by" : {
            "_id" : ObjectId("605dde7c92321c342329d3d3"),
            "fullname" : "Beni Berman",
            "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        "loc" : {
            "lat" : 32.109333,
            "lng" : 34.855499
        },
        "locname" : "Tel-Aviv",
        "comments" : [ 
            {
                "id" : "c1150",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d6"),
                    "fullname" : "Angie Berg",
                    "imgUrl" : "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                },
                "txt" : "Looks lovely!",
                "likedBy" : [ 
                    {
                        "_id" : ObjectId("605dde7c92321c342329d3d3"),
                        "fullname" : "Beni Berman",
                        "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                ]
            }, 
            {
                "id" : "c1111",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d4"),
                    "fullname" : "Sami Cohen",
                    "imgUrl" : "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
                },
                "txt" : "How can I buy one like this"
            }, 
            {
                "by" : {
                    "_id" : "605dde7c92321c342329d3d5",
                    "fullname" : "Erez Hershkovitz",
                    "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
                },
                "txt" : "????",
                "storyId" : "605df51d92321c342329d3e3",
                "id" : "FwRDOP"
            }
        ],
        "likedBy" : [ 
            {
                "_id" : "u112",
                "fullname" : "Noa Paskal",
                "imgUrl" : "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
            }, 
            {
                "_id" : "u110",
                "fullname" : "Shuki Levi",
                "imgUrl" : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            }
        ],
        "tags" : [ 
            "fun", 
            "no_filter"
        ]
    },
    {
        "_id" : ObjectId("605df51d92321c342329d3e4"),
        "txt" : "Amazing view! nice memories..",
        "imgUrl" : "https://i.pinimg.com/originals/85/cc/95/85cc95771093d2d96f91029615d6dcb7.gif",
        "createdAt" : 1616770333298.0,
        "by" : {
            "_id" : ObjectId("605dde7c92321c342329d3d3"),
            "fullname" : "Beni Berman",
            "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        "loc" : {
            "lat" : 7.8789,
            "lng" : 98.4
        },
        "locname" : "Tahiland, Phuket",
        "comments" : [ 
            {
                "id" : "c1150",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d6"),
                    "fullname" : "Angie Berg",
                    "imgUrl" : "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                },
                "txt" : "Looks lovely!",
                "likedBy" : [ 
                    {
                        "_id" : ObjectId("605dde7c92321c342329d3d3"),
                        "fullname" : "Beni Berman",
                        "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                ]
            }, 
            {
                "id" : "c1111",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d4"),
                    "fullname" : "Sami Cohen",
                    "imgUrl" : "https://media1.s-nbcnews.com/i/newscms/2020_44/3423879/hayes-brown-msnbc_c32517cd5919da684844af66f0eb84a5.png"
                },
                "txt" : "How can I buy one like this"
            }
        ],
        "likedBy" : [ 
            {
                "_id" : "u112",
                "fullname" : "Noa Paskal",
                "imgUrl" : "https://i.pinimg.com/236x/5a/09/5a/5a095ab5dc77780a4edff5564aed1f62.jpg"
            }, 
            {
                "_id" : "u110",
                "fullname" : "Shuki Levi",
                "imgUrl" : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            }
        ],
        "tags" : [ 
            "fun", 
            "no_filter"
        ]
    },
    {
        "_id" : ObjectId("605df51d92321c342329d3e5"),
        "txt" : "Another great picture from my last diving!",
        "imgUrl" : "https://image.winudf.com/v2/image/Y29tLldoYWxlV2FsbHBhcGVyRnVsbEhELmR6YWhhYmRob3dpX3NjcmVlbl82XzE1MjMwMTczMjBfMDU0/screen-6.jpg?fakeurl=1&type=.jpg",
        "createdAt" : 1616770333298.0,
        "by" : {
            "_id" : ObjectId("605dde7c92321c342329d3d3"),
            "fullname" : "Beni Berman",
            "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        "loc" : {
            "lat" : 7.8789,
            "lng" : 98.4
        },
        "locname" : "Tahiland, Phuket",
        "comments" : [ 
            {
                "id" : "c1122",
                "by" : {
                    "_id" : ObjectId("605dde7c92321c342329d3d6"),
                    "fullname" : "Angie Berg",
                    "imgUrl" : "https://images.unsplash.com/photo-1569243478800-38c8e6b2f7c6?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTgwNzIzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                },
                "txt" : "Looks lovely!",
                "likedBy" : [ 
                    {
                        "_id" : ObjectId("605dde7c92321c342329d3d3"),
                        "fullname" : "Beni Berman",
                        "imgUrl" : "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                ]
            }, 
            {
                "by" : {
                    "_id" : "605dde7c92321c342329d3d5",
                    "fullname" : "Erez Hershkovitz",
                    "imgUrl" : "https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
                },
                "txt" : "Amazing",
                "storyId" : "605df51d92321c342329d3e5",
                "id" : "4PSCFX"
            }
        ],
        "likedBy" : [ 
            {
                "_id" : "u110",
                "fullname" : "Shuki Levi",
                "imgUrl" : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            }
        ],
        "tags" : [ 
            "fun", 
            "no_filter"
        ]
    }
  ]
  

  const fs = require('fs');
 
let data = JSON.stringify(dataBeforeConvert);
fs.writeFileSync('data-after-convert.json', data);