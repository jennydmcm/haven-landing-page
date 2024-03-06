import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.navBar}>
          <Image className={styles.logo} src={"/havenLandingLogo.svg"} width={150} height={100} alt='logo' />
          <div className={styles.links}>
            <Link href={"/"} className={styles.home}>home</Link>
            <Link href={"/"} className={styles.adoption}>adoption</Link>
            <Link href={"/"} className={styles.resources}>resources</Link>
          </div>
          <button className={styles.signUp}>sign up</button>

        </div>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Find Haven in Every Paw</h1>
            <h2 className={styles.h2}>Every Heart Deserves a Home.</h2>

            <button className={styles.cta} >Adopt Today →</button>
          </div>
          <div className={styles.animation}>
            <Spline scene="https://prod.spline.design/cCKBEUORKNL0-2qQ/scene.splinecode" />

          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.afterFold}>
            <h1 className={styles.getStarted}>Get Started</h1>
            <div className={styles.boxes}>
              <div className={styles.box1}>
                <div className={styles.cat}>
                  <Spline scene="https://prod.spline.design/u4-wTDyQBNcGBT1Y/scene.splinecode" />
                </div>
                <h4 className={styles.charity}>Humane Society</h4>
                <p className={styles.amount}>$5</p>
                <button className={styles.button1}>Donate</button>
              </div>
              <div className={styles.box2}>
                <div className={styles.cat2}>
                  <Spline scene="https://prod.spline.design/RnAFXOehZx9UfUnr/scene.splinecode" />
                </div>
                <h4 className={styles.charity}>Paws Society</h4>
                <p className={styles.amount}>$5</p>
                <button className={styles.button1}>Donate</button>
              </div>
              <div className={styles.box3}>
                <div className={styles.cat3}>
                  <Spline scene="https://prod.spline.design/Jz0aE4LJ5Pf7FW1d/scene.splinecode" />
                </div>
                <h4 className={styles.charity}>VOKRA</h4>
                <p className={styles.amount} >$5</p>
                <button className={styles.button1}>Donate</button>
              </div>
            </div>
          </div>
          <div className={styles.subBanner}>
            <div className={styles.heart}>
              <Spline scene="https://prod.spline.design/RFpyX-WBHEk3rTB2/scene.splinecode" />
            </div>
            <p className={styles.desc}>Here at Haven, we provide the basic necessities that every animal deserves, such as food, water, and shelter.
              <br></br>
              We are a dedicated non–profit organization helping animals that are seeking for a safe, new family.</p>
            <button className={styles.adoptButton}>Volunteer With Us</button>
          </div>

          <div className={styles.newsletter}>
            <h2 className={styles.newsTitle}>Get Notified</h2>
            <h3 className={styles.newsCTA}>Sign up for the Haven newsletter and get notified of new animals, giveaways and special events.</h3>
            <div className={styles.signUpCTA}>
              <input className={styles.input} type='text' placeholder='email'></input>
              <button className={styles.submit} type='submit'>Sign Up</button>
            </div>
          </div>
          <div className={styles.footer}>
            <p>© Jenny McMahon</p>
            <Link className={styles.gitLink} href={"https://github.com/mpedrano/Haven.git "}>Haven</Link>
          </div>
        </div>
      </main>
    </>
  )
}
