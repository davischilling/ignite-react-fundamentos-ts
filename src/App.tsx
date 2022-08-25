import { Header, Post, Sidebar } from './components'
import styles from './App.module.css'

interface Post {
  id: number
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

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/87915811?v=4',
      name: 'Davi Schilling',
      role: 'Analista Desenvolvedor Web & Mobile'
    },
    content: [
      { type: 'paragraph', content: 'Mussum Ipsum, cacilds vidis litro abertis.' },
      { type: 'paragraph', content: 'Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.' },
      { type: 'link', content: 'Aenean sit amet nisi.' },
    ],
    publishedAt: new Date('2022-08-23 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Mussum Ipsum, cacilds vidis litro abertis.' },
      { type: 'paragraph', content: 'Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.' },
      { type: 'link', content: 'Aenean sit amet nisi.' },
    ],
    publishedAt: new Date('2022-08-13 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
