// routes/chirp.tsx

import { Handlers, PageProps } from "$fresh/server.ts";
import { Posts } from "../components/Posts.tsx";
import Submit from "../islands/Submit.tsx";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

interface Post {
  text: string;
  author: string;
}

interface RootObject {
  posts: Post[];
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://chirp-backend.deno.dev/api`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<RootObject | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <main>
      <Posts posts={data.posts}></Posts>
      <Submit />
    </main>
  );
}
