//components/Post.tsx

export interface PostProps {
    text: string;
    author: string;
  }
  
  export function Post({ text , author}: PostProps) {
    return (
      <div class="w-full bg-gray-50 h-12 text-black rounded shadow flex justify-between items-center content-between">
        <p class="p-2 w-5/6">
          {text}
        </p>
        <p class="p-2 w-1/6 text-right">
          {author}
        </p>
      </div>
    );
  }