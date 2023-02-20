import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://xesque.rocketseat.dev/users/avatar/profile-899a33e5-bc1f-4cbd-82df-b6403f0fb47a-1652482537324.jpg"
          />
          <div className={styles.authorInfo}>
            <strong>Rafael Machado</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="segunda-feira, 20 de fevereiro de 2023 ás 13:13"
          dateTime="2023-02-20 13:13:13"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{" "}
          <a href="https://github.com/Rafael-Machado01">
            github.com/Rafael-Machado01
          </a>
        </p>
        <p>
          <a href="https://github.com/new">#novoprojeto</a>{" "}
          <a href="https://blog.rocketseat.com.br/tag/nlw/">#nlw</a>{" "}
          <a href="https://app.rocketseat.com.br/dashboard">#rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
