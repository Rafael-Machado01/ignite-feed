import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

//  author: {avatar_url  "", name: "", role:""}
//  PublishedAt: Date
//  Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
      name: "Rafael  Machado",
      role: "Developer  React",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content:
          '<a href="https://github.com/Rafael-Machado01">github.com/Rafael-Machado01</a>',
      },
    ],
    PublishedAt: new Date("2023-02-22 19:23:22"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content:
          '<a href="https://github.com/Rafael-Machado01">github.com/Rafael-Machado01</a>',
      },
    ],
    PublishedAt: new Date("2023-02-22 19:23:22"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                PublishedAt={post.PublishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
