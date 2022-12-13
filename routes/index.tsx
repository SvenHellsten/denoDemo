import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import LemonDrop from "../islands/LemonDrop.tsx";
import Footer from "../components/Footer.tsx";
import VERSIONS from "../versions.json" assert { type: "json" };
import * as FeatureIcons from "../components/FeatureIcons.tsx";
import CopyArea from "../islands/CopyArea.tsx";
import * as Icons from "../components/Icons.tsx";
import Projects from "../components/Projects.tsx";
import Header from "../components/Header.tsx";
import CodeBox from "../components/CodeBox.tsx";
import Input from "../islands/Input.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const accept = req.headers.get("accept");
    if (accept && !accept.includes("text/html")) {
      const path = `https://deno.land/x/fresh@${VERSIONS[0]}/init.ts`;
      return new Response(`Redirecting to ${path}`, {
        headers: { "Location": path },
        status: 307,
      });
    }
    return ctx.render();
  },
};

const TITLE = "fresh - The next-gen web framework.";
const DESCRIPTION =
  "Just in time edge rendering, island based interactivity, and no configuration TypeScript support using Deno.";

export default function MainPage(props: PageProps) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;
  const origin = `${props.url.protocol}//${props.url.host}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>

      <div class="flex flex-col min-h-screen">
        <div class="bg-green-300 flex flex-col">
          <Hero />
        </div>
        <div class="flex-1">
          <Intro />
          <WhatsNew />
          <NodeVSDeno />
          <GettingStarted origin={origin} />
          <Fresh />
          <FreshFolders />
          <GettingStartedFresh origin={origin} />
        </div>
      </div>
    </>
  );
}

function HelloBar() {
  return (
    <a
      class="bg-green-400 text-black border(b green-500) p-3 text-center group"
      href="https://deno.com/blog/fresh-1.1"
    >
      <b>Fresh v1.1</b> has been released with support for <b>automatic JSX</b>,
      {" "}
      <b>plugins</b>, <b>DevTools support</b>, and more!{"  "}
      <span class="group-hover:underline">→</span>
    </a>
  );
}

function Hero() {
  return (
    <>
      <section class="h-screen w-full flex justify-top items-center flex-col bg-nlGreen">
        <h2 class="py-16 text(5xl sm:5xl lg:5xl gray-100) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
          A <span class="text-nlPurple">Netlight</span> talk about:
        </h2>
        <LemonDrop />
      </section>
    </>
  );
}

function FreshFeatures() {
  const item = "flex md:flex-col items-center gap-5";
  const desc = "flex-1 md:text-center";

  return (
    <div class="grid md:grid-cols-3 gap-6 md:gap-14">
      <div class={item}>
        <FeatureIcons.Globe />
        <div class={desc}>
          <b>Just-in-time rendering</b> on the edge.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.Island />
        <div class={desc}>
          <b>Island based client hydration</b> for maximum interactivity.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.LightWeight />
        <div class={desc}>
          <b>Zero runtime overhead</b>: no JS is shipped to the client by
          default.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.NoBuild />
        <div class={desc}>
          <b>No build step</b>.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.Gabage />
        <div class={desc}>
          <b>No configuration</b> necessary.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.TypeScript />
        <div class={desc}>
          <b>TypeScript support</b> out of the box.
        </div>
      </div>
    </div>
  );
}

function Features() {
  const item = "flex md:flex-col items-center gap-5";
  const desc = "flex-1 md:text-center text(xl sm:xl lg:xl)";

  return (
    <div class="grid md:grid-cols-3 gap-6 md:gap-14">
      <div class={item}>
        {/* <FeatureIcons.Globe /> */}
        <div class={desc}>
          Made by Node.js creator <b>Ryan Dahl</b>
        </div>
      </div>

      <div class={item}>
        {/* <FeatureIcons.Island /> */}
        <div class={desc}>
          Runs on <b>Rust</b> and <b>Typescript</b>.
        </div>
      </div>

      <div class={item}>
        {/* <FeatureIcons.LightWeight /> */}
        <div class={desc}>
          Powered by <b>Chrome's V8</b> javascript Engine.
        </div>
      </div>

      <div class={item}>
        {/* <FeatureIcons.NoBuild /> */}
        <div class={desc}>
          Out of the box support for <b>Typescript</b> (no tsconfig.json needed)
        </div>
      </div>

      <div class={item}>
        {/* <FeatureIcons.Gabage /> */}
        <div class={desc}>
          Built in <b>linter, code formatter</b> and more.
        </div>
      </div>

      <div class={item}>
        {/* <FeatureIcons.TypeScript /> */}
        <div class={desc}>
          Super fast Deployment with <b>Deno Deploy</b>
        </div>
      </div>
    </div>
  );
}
function FirstDeno() {
  const item = "flex md:flex-col items-center gap-5 m-14";
  const desc = "flex-1 md:text-center text(xl sm:xl lg:xl)";

  return (
    <div class="w-5/6 grid md:grid-cols-3 gap-8 md:gap-44">
      <div class={item}>
        <div class={desc}>
          <b>HomeBrew (Mac)</b>
        </div>
        <CopyArea>
          {`brew install deno`}
        </CopyArea>
      </div>

      <div class={item}>
        <div class={desc}>
          <b>Shell (Mac/Linux)</b>
        </div>
        <CopyArea>
          {`curl -fsSL https://deno.land/x/install/install.sh | sh`}
        </CopyArea>
      </div>

      <div class={item}>
        <div class={desc}>
          <b>Shell (Mac/Linux)</b>
        </div>
        <CopyArea>
          {`irm https://deno.land/install.ps1 | iex`}
        </CopyArea>
      </div>

      <div class={item}>
        <div class={desc}>
          <b>Hello World.</b>
        </div>
        <CopyArea>
          {`/helloDeno.ts console.log("Welcome to Deno!");`}
        </CopyArea>
        <CopyArea>
          {`deno run helloDeno.ts`}
        </CopyArea>
      </div>
    </div>
  );
}
function Differences() {
  const item = "flex md:flex-col items-center gap-5 my-14 text(sm xs:xs)";
  const desc = "flex-1 md:text-center text(xl sm:xl lg:xl)";

  return (
    <div class="grid md:grid-cols-3 gap-2 md:gap-14">
      <div class={item}>
        <div class={desc}>
          <b>Secure by default</b>
        </div>
        <CodeBox>
          {`deno run word.ts ⚠️`}
        </CodeBox>
        <CodeBox>
          {`deno run --allow-read word.ts ✅`}
        </CodeBox>
      </div>

      <div class={item}>
        <div class={desc}>
          <b>No package handler!</b> You have to import via URL
        </div>
        <CodeBox>
          {`import {add,multiply,} from \n"https://x.nest.land\n/ramda@0.27.0/source/index.js";`}
        </CodeBox>
      </div>

      <div class={item}>
        {/* <FeatureIcons.Gabage /> */}
        <div class={desc}>
          Behaves like a browser.
        </div>
        <CodeBox>
          {`const res = await fetch('https://github.com);`}
        </CodeBox>
        <CodeBox>
          {`window.onload = e => console.log('Deno 🦕'));`}
        </CodeBox>
      </div>

      <div class={item}>
        <div class={desc}>
          <b>It's very fast.</b>
        </div>
        <img
          id="img"
          src="/gallery/speed.png"
          height="150"
          width="150"
        />
      </div>

      <div class={item}>
        {/* <FeatureIcons.NoBuild /> */}
        <div class={desc}>
          <b>Easy deployment</b> with Deno.deploy
        </div>
        <img
          id="img"
          src="/gallery/deploy.png"
          height="150"
          width="150"
        />
      </div>

      <div class={item}>
        <div class={desc}>
          <b>Batteries included. </b>

          Linter, code formater, IDE integration all developed by the Deno team
        </div>
        <img
          id="img"
          src="/gallery/battery.png"
          height="150"
          width="150"
        />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section class="h-screen max-w-screen-md mx-auto my-0 mt-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            DENO
          </h2>

          <p class="mt-4 text-gray-600">
            A quick and secure javascript runtime
          </p>
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/illustration/deno-logo.svg"
            class="w-80 mx-auto"
            width={600}
            height={600}
            alt="deno is drinking fresh lemon squash"
          />
        </picture>
      </div>

      <Features />
    </section>
  );
}

function Fresh() {
  return (
    <section class="h-screen max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Now <span class="text-green-600">Fresh</span>.
          </h2>
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/illustration/lemon-squash.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="deno is drinking fresh lemon squash"
          />
        </picture>
      </div>

      <FreshFeatures />
    </section>
  );
}

function GettingStartedFresh(props: { origin: string }) {
  return (
    <section class="max-w-screen-md mx-auto my-8 px(4 sm:6 md:8) space-y-4">
      <h2 id="getting-started" class="text(3xl gray-600) font-bold">
        <a href="#getting-started" class="hover:underline">
          Getting Started with <span class="text-green-600">Fresh</span>
        </a>
      </h2>
      <p class="text-gray-600">
        To bootstrap a new project:
      </p>

      <CopyArea>
        {`deno run -A -r https://fresh.deno.dev my-deno-project`}
      </CopyArea>

      <p class="text-gray-600">
        Enter the newly created project directory and run the following command
        to start the development server:
      </p>

      <CopyArea>{`deno task start`}</CopyArea>

      <div class="flex-1 text-center md:text-left">
        <h2 class="py-4 text(5xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
          Depoy super fast with <span class="text-nlGreen">Deno Deploy</span>.
        </h2>
        <h2 class="py-4 text(5xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
          Server side rendering is back!{" "}
          <span class="text-nlCoral">Kinda...</span>
        </h2>
        <h2 class="py-4 text(5xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
          No build step, and renders just in time.
        </h2>
        <h2 class="py-4 text(5xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
          Uses <span class="text-nlPurple">Tailwind</span> for CSS as default.
        </h2>
      </div>
      <div class="pt-48">
        <p class="text-gray-600">
          If you want to try some stuff:
        </p>
        <CopyArea>
          {`GET https://chirp-backend.deno.dev/api\nPOST https://chirp-backend.deno.dev/api \nbody: {\n  text: "A very cool chirp",\n  author: "Elon Tusk",\n} `}
        </CopyArea>
        <div class="pt-4">
          <a
            href="/chirp"
            class=" text(3xl sm:3xl lg:3xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold"
          >
            <span class="text-nlGreen">Chirp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FreshFolders() {
  return (
    <section class="h-screen max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            <span class="text-nlGreen">Routing</span>.
          </h2>
          <CodeBox>
            {`├── routes\n│   ├── [name].tsx\n│   ├── api\n│   │   └── post.ts\n│   └── index.tsx\n`}
          </CodeBox>
        </div>
      </div>
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            <span class="text-nlCoral">Components</span>.
          </h2>
          <div class="py-2">
            <button />
          </div>
          <div>
            <CodeBox>Look Code! I cant be interacted with..</CodeBox>
          </div>
        </div>
      </div>
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            <span class="text-nlPurple">Islands</span>.
          </h2>
          <div class="py-5">
            <Counter start={3} />
          </div>
          <div class="py-5">
            <CopyArea>Copy Me!</CopyArea>
          </div>
          <div>
            <Input placeholder="Type something here!" />
            <Input placeholder="Not here" disabled />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsNew() {
  return (
    <section
      class="md:flex items-center h-screen w-screen  px(4 sm:6 md:8) space-y-4 bg-cover"
      style="background-image: url(/gallery/cuteDeno.png)"
    >
      <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-200) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
        So what's new?
      </h2>
    </section>
  );
}
function NodeVSDeno() {
  return (
    <section class="md:flex items-center h-screen w-screen  px(4 sm:6 md:8) space-y-4">
      {/* <h2 class="py-2 sm:tracking-tight sm:leading-[1.1]!"> */}
      <Differences />
      {/* </h2> */}
    </section>
  );
}

function GettingStarted(props: { origin: string }) {
  return (
    <section class=" h-screen max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="getting-started" class="text(3xl gray-600)  font-bold">
        <a href="#getting-started" class="hover:underline">
          Getting DENO
        </a>
      </h2>
      <div>
        <div>
          <b>HomeBrew (Mac)</b>
        </div>
        <CopyArea>
          {`brew install deno`}
        </CopyArea>
      </div>
      <div>
        <div>
          <b>Shell (Mac/Linux)</b>
        </div>
        <CopyArea>
          {`curl -fsSL https://deno.land/x/install/install.sh | sh`}
        </CopyArea>
      </div>
      <div>
        <div>
          <b>Powerwshell (Windows)</b>
        </div>
        <CopyArea>
          {`irm https://deno.land/install.ps1 | iex`}
        </CopyArea>
      </div>
      <div class="pt-8 pb-4">
        <h2 id="example" class="text(3xl gray-600) font-bold">
          Hello World
        </h2>
        <p class="text(m gray-600) font-bold">/helloDeno.ts</p>
        <div>
          <CopyArea>
            {`console.log("Welcome to Deno!");`}
          </CopyArea>
        </div>
        <div class="pt-4">
          <CopyArea>
            {`deno run helloDeno.ts`}
          </CopyArea>
        </div>
      </div>
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            That's <span class="text-nlPurple">Deno</span>.
          </h2>
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/gallery/DenoLogo3.gif"
            class="w-80 mx-auto"
            width={600}
            height={600}
            alt="deno is drinking fresh lemon squash"
          />
        </picture>
      </div>
    </section>
  );
}

const timeFmt = new Intl.DateTimeFormat("en-US", {
  timeStyle: "long",
  hour12: false,
});

function Example() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <Counter start={3} />
    </section>
  );
}
