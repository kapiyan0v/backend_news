const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const News = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    subtitle: {type: DataTypes.STRING},
    body: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATE},
    img: {type: DataTypes.STRING},
})

const Likes = sequelize.define('like', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Tags = sequelize.define('tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Comments = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body: {type: DataTypes.STRING},
})

News.hasOne(User)
User.belongsTo(News)

News.hasMany(Likes)
Likes.belongsTo(News)

Likes.hasOne(User)
User.belongsTo(Likes)

News.hasOne(Tags)
Tags.belongsTo(News)

News.hasMany(Comments)
Comments.belongsTo(News)

Comments.hasOne(User)
User.belongsTo(Comments)

module.exports = {
    User,
    News, 
    Likes,
    Tags,
    Comments
}
