import { useState } from "preact/hooks";
import { Tasks } from "../components/Tasks.tsx";

async function post(text: string, author: string) {
  const body = {"text": text,"author":author};
  const response = await fetch("https://cors.deno.dev/https://chirp-backend.deno.dev/api", {
        method: "POST",
        body: JSON.stringify( body ),
      });
}

export default function Submit() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div class="flex flex-col w-full pt-5">
      <form
        class="flex gap-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(text);
          console.log(author);
          post(text, author);
          setText("");
          setAuthor("");
        }}
      >
        <input
          class="w-5/6 border-1 border-gray-500 h-10 rounded p-2"
          placeholder="Write your post here..."
          type="text"
          value={text}
          onInput={(e) => setText((e.target as HTMLInputElement).value)}
        />
        <input
          class="w-5/6 border-1 border-gray-500 h-10 rounded p-2"
          placeholder="Who are you?"
          type="author"
          value={author}
          onInput={(e) => setAuthor((e.target as HTMLInputElement).value)}
        />
        <input
          type="submit"
          value="Add"
          class="w-1/6 bg-blue-600 text-gray-50 rounded cursor-pointer hover:bg-blue-700 focus:bg-blue-700"
        >
        </input>
      </form>
    </div>
  );
}
