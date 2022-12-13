// components/Posts.tsx

import { Post } from "./Post.tsx";

interface PostProps {
  posts: Post[];
//   removeTask: (s: string) => void;
}

export function Tasks({ tasks }: PostProps) {
  return (
    <div class="flex flex-col gap-2 pt-2 w-full">
      {posts.map((post) => <Post post={task}/>)}
    </div>
  );
}