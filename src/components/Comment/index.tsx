import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

interface CommentProps {
  comment: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        alt=""
        hasBorder={false}
        src="https://github.com/gabrielapl.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel gxgo</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 00:13:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
