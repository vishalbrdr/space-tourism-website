import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import data from '../public/data.json'

export default function Home() {
  return (
    <>
    <section className={styles.home}>
    <p className='Heading Heading-1'>Space</p>
    </section>
    </>
  )
}
