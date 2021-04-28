const UUID = require('uuid')
const {getAll, getById, removeById, save, update} =
    require('../dal/posts.dao');
//Map is key valued data store
//const posts = new Map();
//name and description is property name that getting from the createPost
const createPost = async ({name, description}) => {
    const post = {
        id:UUID.v4(),
        name,
        description,
        postedDate: new Date()
    }
    //setting it to a posts.in a map key should be unique
  //  posts.set(post.id, post);
    return await save(post);
}
//get all the posts .posts mean all the values in the map
//post.values mean return and iterator.can iterate to get one object to other
const getPosts = async () => {
    //(...) this is call as thread operator.this is capable of threading the iterator in to individual value
    //putting it inside an array an returning all the values as the array
    //return [...posts.values()];
    return await getAll();
}

const getPost = async(id) => {
   // return posts.get(id);
    return await getById(id);
}

let deletePost = async (id) =>{
    return await removeById(id)

}
let updatePost = async (id,{name,description}) =>{
    let post = {

        name:name,
        description:description,
        postedDate :new Date()
    };
    return await update(id,post);
};


module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost

};
