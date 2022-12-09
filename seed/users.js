const db = require('../db')
const Chance = require('chance')
const { Comment, Post, User } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createComments = async () => {
    const comments = [...Array(400)].map((comment) => {
        return new Comment({
            body: chance.paragraph()
        })
    })
    await Comment.insertMany(comments)
    console.log('Created Comments!')
    return comments
}

const createPostsWithComments = async (comments) => {
//   console.log(comments) 
  let lenOfItems = 100
  const posts = [...Array(lenOfItems)].map((post) => {
      const selectedComments = comments.splice(0, comments.length / lenOfItems)
      return {
          title: chance.sentence(),
          body: chance.paragraph({sentences:50}),
          likes: Math.floor(Math.random() * 100),
          comments: selectedComments.map((comment) => comment._id)
      }
  })
  await Post.insertMany(posts)
  console.log('Created Posts!')
  return posts
}

const createUsersWithPosts = async (posts) => {
    // console.log(posts)
    let lenOfItems = 100
    const users = [...Array(lenOfItems)].map((user) => {
        const selectedPosts = posts.splice(0, posts.length / lenOfItems)
        return {
            first_name: chance.first(),
            last_name: chance.last(),
            email: chance.email(),
            password: chance.word(),
            location: chance.address(),
            weight: Math.floor(Math.random() * 300),
            height: Math.floor(Math.random() * 300),
            avatar: chance.avatar(),
            posts: selectedPosts.map((post) => post._id)
        }
    })
    await User.insertMany(users)
    console.log('Created Users!')
}

const run = async () => {
    const comments = await createComments()
    const posts = await createPostsWithComments(comments)
    await createUsersWithPosts(posts)
    db.close()
}

run()