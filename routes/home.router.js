//Router is actually library that available
//it gives us capability of braking down routes in a more modular fashion
const Router = require('@koa/router');
//creating a new router out of it .while we are creating it we give the prefix
//prefix is  how all the routes being registered
//
const router = new Router({
    prefix: '/home'
});
///home get method
router.get('/', ctx => {
    ctx.body = 'Hello World';
});
///home post method
router.post('/', ctx => {
    ctx.body = 'Hello World';
});
module.exports =  router;

// const posts = new Map();
// const createPost = obj => {
//     const post  = {name: obj.name, description:obj.description, id:UUID.v4(), date: new Date()};
//     posts.set(post.id, post);
// };
