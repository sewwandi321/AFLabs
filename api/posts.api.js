const UUID = require('uuid')
//Map is key valued data store
const posts = new Map();
//name and description is property name that getting from the createPost
const createPost = ({name, description}) => {
    const post = {
        id:UUID.v4(),
        name,
        description,
        postedDate: new Date()
    }
    //setting it to a posts.in a map key should be unique
    posts.set(post.id, post);
    return post;
}
//get all the posts .posts mean all the values in the map
//post.values mean return and iterator.can iterate to get one object to other
const getPosts = () => {
    //(...) this is call as thread operator.this is capable of threading the iterator in to individual value
    //putting it inside an array an returning all the values as the array
    return [...posts.values()];
}

const getPost = id => {
    return posts.get(id);
}

module.exports = {
    createPost,
    getPost,
    getPosts
};
