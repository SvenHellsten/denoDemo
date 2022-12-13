// components/Posts.tsx

import { Post , PostProps} from "./Post.tsx";

interface PostsProps {
    posts:  PostProps[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <div class="flex flex-col gap-2 pt-2 w-full">
      {posts.map(({text,author}) => <Post text={text} author={author}/>)}
    </div>
  );
}