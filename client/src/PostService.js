import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
// Get Posts
static async getPosts() {
    const res = await axios.get(url);
    return new Promise((resolve, reject) => {
        try {
            const data = res.data;
            resolve(
                data.map(post => ({
                    ...post,
                    created_at: new Date(post.created_at)
                }))
            );
        } catch(err) {
            reject(err);
        }
    });
}

// Create Post
static InsertPost(text) {
return axios.post(url, {
    text
});
}

// Delete Post
static deletePost(id) {
    return axios.delete(`${url}${id}`);
}
}

export default PostService;