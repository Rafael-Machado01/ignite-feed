import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post, PostType } from "./components/Post";
import { faker } from "@faker-js/faker/locale/pt_BR";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "data:image/jpeg;base64,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",
      name: "Steve Jobs",
      role: "Inventor",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto de Sistemas Operacionais o nome é Machintosh🚀",
      },
      { type: "link", content: "apple.com/imac-24/" },
    ],
    publishedAt: "1984-01-24T00:00:01",
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
          "Acabei de subir mais um projeto no meu portifa. É um projeto chamado Doctor Care que fiz para o NLW Return",
      },
      { type: "link", content: "nlw.doctor  " },
    ],
    publishedAt: "2022-06-13T11:30:00",
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
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
