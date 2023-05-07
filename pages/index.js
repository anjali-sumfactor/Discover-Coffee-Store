import Head from 'next/head';

import Image from "next/image";
import { Banner } from '@/components/banner';
import { Card } from './components/card';
import coffeeStoresData from '../data/coffee-stores.json';

import styles from '@/styles/Home.module.css';

// export async function getStaticProps(context) {
//   return {
//     props: {
//       coffeeStores:coffeeStoresData,
//     },
//   }
// }

export default function Home(props) {
  console.log("props", props);

  const handleOnBannerBtnClick = () => {
    console.log("hi banner button")
  }

  return (
    <div className={styles.conatiner}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
        <Image className={styles.heroImage} src="/static/hero-image.png" width={700} height={400} alt="hero iamge"></Image>

        {
          props.coffeeStores.length > 0 && <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map(coffeeStore => {
                return (
                  <Card key={coffeeStore.id}
                    name={coffeeStore.name} imageUrl={coffeeStore.imgUrl} href="/coffee-store/darkhorse-coffee" className={styles.card} />
                )
              })}
            </div>
          </>
        }
      </main>
    </div>
  )
}
