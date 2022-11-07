import Head from 'next/head'

export default function Tete({ page }) {
  return (
    <>
      <Head>
        <title>Nowfeel.dev - {page}</title>
        <meta
          name="description"
          content="Welcome to my fabulous Portfolio, get to know me thanks to this website !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
