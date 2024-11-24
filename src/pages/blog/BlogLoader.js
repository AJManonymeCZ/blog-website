import posts from "../../data/posts.json"

const BlogLoader = ({params}) => {
    const post = posts.find(p => p.id == params.id);
    return post ?? null;
};

export default BlogLoader;
