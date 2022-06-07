const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const News = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    subtitle: {type: DataTypes.STRING},
    body: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATE},
    img: {type: DataTypes.STRING},
    tag: {type: DataTypes.STRING},
    author: {type: DataTypes.STRING},
    likes: {type: DataTypes.INTEGER, defaultValue: 0}
})


const Comments = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body: {type: DataTypes.STRING},
})

News.associate = (models) => {
    News.hasMany(models.Comments, {as: 'comment', foreignKey: 'articleId'})
}

Comments.associate = (models) => {
    Comments.belongsTo(models.News, {as: 'article', foreignKey: 'articleId'});
}





News.hasMany(Comments)
Comments.belongsTo(News)

User.hasOne(Comments)
Comments.belongsTo(User)

module.exports = {
    User,
    News, 
    Comments,
}
