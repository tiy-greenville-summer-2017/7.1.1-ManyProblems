
const models = require('./models');

models.Blog.findById(2).then(blog => {
  // console.log(blog.title);
  blog.getTags().then(tags => {
    console.log(tags);
  });
  // models.sequelize.close();  // NEVER USE IN EXPRESS!!!!!!!@!!!!!!1
})
