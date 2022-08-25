import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Sidebar.module.css'

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <img
      src='https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50'
      className={styles.cover}
    />
  
    <div className={styles.profile}>
      <Avatar src="https://avatars.githubusercontent.com/u/87915811?v=4" />

      <strong>Davi Schilling</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href='#'>
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
)