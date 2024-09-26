import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { SideBar } from './components/SideBar';


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String,

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://files.sunoresearch.com.br/p/uploads/2021/12/Steve_Jobs-400x300.jpg',
      name: "Steve Jobs",
      role: "Apple Founder"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que estou trabalhando, O nome do projeto é MacIntosh 🚀' },
      { type: 'link', content: 'https://www.apple.com/br/mac/' },
    ],
    publishedAt: new Date('1984-01-24 20:42:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maik Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-13 20:44:00'),
  },
]

// iteração

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt} />)}
        </main>
      </div>
    </>
  )
}

export default App
