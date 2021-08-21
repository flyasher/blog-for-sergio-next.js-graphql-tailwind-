import BlogPostCard from './BlogPostCard';

const PostsPreviewContainer = ({ posts }) => (
  <div className="grid items-center justify-center grid-cols-12 gap-8 px-4 my-10 lg:px-0 md:gap-10 ">
    {posts.map(post => (
      <BlogPostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostsPreviewContainer;
