import Head from 'next/head'

export default function Tete({ page }) {
  const title = 'Nowfeel.dev - ' + page
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta
          name="description"
          content="Welcome to my fabulous Portfolio, get to know me thanks to this website !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
