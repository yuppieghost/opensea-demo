import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import a1 from '../assets/images/a1.png'
import eth from '../assets/images/eth.svg'
import assets from '../assets/assets.json'
import _ from "lodash"


export default function Home({assets}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>OPENSEA</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Trending <a href="">ITEMS</a>
                </h1>

                <div className={styles.grid}>
                    {assets.map((asset => (
                        <div key={asset.id} className={styles.card}>
                            <Image
                                // src={a1}
                                src={asset.image_url}
                                width={500}
                                height={500}
                            />
                            <div className={styles.info}>
                                <div className="left">
                                    <div className={styles.col_name}>{asset.collection.name}</div>
                                    <div>{asset.name}</div>
                                </div>
                                <div className={styles.price_tag}>
                                    <div>Price</div>
                                    <div>
                                        <Image src={eth} height={"14px"}/> {Math.random(100).toFixed(2)}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )))}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            assets: assets.assets.slice(0, 4)
        },
    }
}

