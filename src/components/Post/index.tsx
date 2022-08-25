import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: Array<{
    type: 'paragraph' | 'link'
    content: string
  }>
  publishedAt: Date
}

export const Post = ({
  author: {
    avatarUrl,
    name,
    role
  },
  content,
  publishedAt
}: PostProps) => {

  const [comments, setComments ] = useState<string[]>([])
  const [newCommentText, setNewCommentText ] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commentToBeDeleted: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment =>  {
      return comment !== commentToBeDeleted
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
  
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
  
      <div className={styles.content}>
        {
          content.map(paragraph => {
            if (paragraph.type === 'paragraph'){
              return <p key={paragraph.content}>{paragraph.content}</p>
            } else if (paragraph.type === 'link'){
              return <p key={paragraph.content}>s2{' '}<a href=''>{paragraph.content}</a></p>
            }
          })
        }
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>
  
      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
  
        <textarea
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder='Deixe seu comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />
  
        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>
  
      <div className={styles.commentList}>
        {
          comments.map(comment => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))
        }
      </div>
    </article>
  )
}