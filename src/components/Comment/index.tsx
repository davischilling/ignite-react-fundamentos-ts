import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (content: string) => void
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleEncreaseLikeCounter = () => {
    // interessante usar esse padrão quando a atualização do estado depende
    // do próprio estado
    setLikeCount(state => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasborder={false} src='https://avatars.githubusercontent.com/u/87915811?v=4' />
  
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Davi Schilling</strong>
              <time title='23 de Agosto às 18:24h' dateTime='2022-08-23'>Cerca de 1h atrás</time>
            </div>
  
            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
  
          <p>{content}</p>
        </div>
  
        <footer>
          <button onClick={handleEncreaseLikeCounter}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}