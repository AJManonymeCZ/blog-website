import posts from "../../data/posts.json";

const BlogsLoader = ({params}) => {
    return posts.filter(p => p.category ===  params.category)
};

export default BlogsLoader;
