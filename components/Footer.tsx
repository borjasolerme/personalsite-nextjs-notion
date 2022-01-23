import * as React from 'react'
import {
  FaPencilAlt,
  FaHome,
  FaUserAstronaut,
  FaBookmark
} from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <a
        className={styles.linkedin}
        href={`https://www.borjasoler.me/`}
        title={`Borja Soler | Website`}
      >
        <FaHome />
      </a>
      <a
        className={styles.linkedin}
        href={`https://www.borjasoler.me/writings`}
        title={`Writings`}
      >
        <FaPencilAlt />
      </a>
      <a
        className={styles.linkedin}
        href={`https://www.borjasoler.me/about`}
        title={`About me`}
      >
        <FaUserAstronaut />
      </a>
      <a
        className={styles.linkedin}
        href={`https://www.borjasoler.me/bookmarks`}
        title={`Bookmarks`}
      >
        <FaBookmark />
      </a>
      <hr className='vertical-bar' />

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}
    </footer>
  )
}
