const User = require('./User');
const Blogpost = require('./Blogpost');






Blogpost.belongsTo(User,
    { foreignKey: 'author', targetKey: 'username' });
User.hasMany(Blogpost, 
    { foreignKey: 'author', sourceKey: 'username' });