const Router = require('@koa/router'),
    {createPost ,getPost ,getPosts, deletePost,updatePost} = require('../api/posts.api');
//prefix post
const router = new Router({
    prefix: '/posts'
});
router.get('/', async ctx => {
    ctx.body = await getPosts();
});
router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPost(id);
});

router.del('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await deletePost(id);
});
router.upd('/:id', async ctx => {
    let post = ctx.request.body;
    let id = ctx.params.id;
    post = await updatePost(id,post);
    ctx.response.status = 201;
    ctx.body = post;
});

module.exports = router;