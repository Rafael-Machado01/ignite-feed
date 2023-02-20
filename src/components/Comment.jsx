import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://xesque.rocketseat.dev/users/avatar/profile-899a33e5-bc1f-4cbd-82df-b6403f0fb47a-1652482537324.jpg" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Machado</strong>
              <time
                title="segunda-feira, 20 de fevereiro de 2023 ás 13:13"
                dateTime="2023-02-20 13:13:13"
              >
                Cerca de 1h atrás{" "}
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>32</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
