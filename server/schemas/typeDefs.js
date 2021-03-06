const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
      _id: ID!
      username: String!
      name: String
      email: String!
      followers: [User]
      following: [User]
   }
   type Post {
      _id: ID!
      content: String!
      date: Float!
      likes: [User]
      comments: [Comment]
      postedBy: User
      username: String
   }
   type Comment {
      _id: ID!
      content: String!
      date: Float!
      likes: [User]
      postedBy: User
      postedOn: Post
      username: String
   }
   type Auth {
      token: ID!
      user: User!
   }

   input UserInput {
      username: String!
      name: String!
      email: String!
      password: String!
   }

   type Query {
      users: [User]!
      user(userId: ID!): User
      searchUser(username: String!): [User]
      me: User!

      newsfeed(usernames: [String]!): [Post]

      posts: [Post]!
      post(postId: ID!): Post
      postsByUser(username: String!): [Post]
      myPosts: [Post]

      comments: [Comment]
      comment(commenttId: ID!): Comment
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(userInput: UserInput!): Auth
      removeUser(userId: ID): String
      followUser(userId: ID!): User
      unfollowUser(userId: ID!): User

      addPost(content: String!): Post
      removePost(postId: ID!): String
      likePost(postId: ID!): Post
      unlikePost(postId: ID!): Post

      addComment(content: String!, postId: ID!): Post
      removeComment(commentId: ID!): String
      likeComment(commentId: ID!): Comment
      unlikeComment(commentId: ID!): Comment
   }
`;

module.exports = typeDefs;
