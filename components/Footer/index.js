import styles from './Footer.module.css'

const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/megan-walter-dev/'
  },
  {
    name: 'Email',
    link: 'mailto:megan.elizabeth.walter@gmail.com'
  },
  {
    name: 'Vanstagram',
    link: 'https://www.instagram.com/vanlife.business/'
  }
]

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.list}>
          {socials.map((link) => (
            <li className={styles.listitem} key={link.name}>
              <a className={styles.link} href={link.link} target="_blank">{link.name}</a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}
