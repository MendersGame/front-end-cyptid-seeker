// css
import styles from './Landing.module.css'
import logotype from '../../assets/branding/logotype.svg'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <section className={styles.splash}>
          <img src={logotype} alt="A cute owl" />
        </section>
        <section className={styles.about}>
          <header>
            <h1>Presented by: The Phantom Props</h1>
          </header>
          <article>
            <p>
            An app for people who hunt mythological creatures and want to share stories of their encounters with others & learn more about cryptids in the process.
            </p>
          </article>
        </section>
    </main>
  )
}

export default Landing
