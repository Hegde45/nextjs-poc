import React, { useEffect, useState } from 'react'
import Head from "next/head"

const siteMetadata = {
  companyName: "Example",
  phoneNumber: "(xxx) xxx-xxxx",
  siteUrl: "https://example.com",
  siteLogo: "https://example.com/images/logo.png",
  siteLogoSquare: "https://example.com/images/logox200.png",
  email: "yourName@example.com",
  twitter: "https://twitter.com/example.page",
  twitterHandle: "@example",
  facebook: "https://www.facebook.com/example.page",
  instagram: "https://www.instagram.com/example.page",
  linkedin: "https://www.linkedin.com/in/example.page"
}

const HeadSeo = ({
    title,
    description,
    canonicalUrl,
    ogTwitterImage,
    ogType,
    children,
}) => {

    return (
        <Head>
            {/* basic metadata */}
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={description} />
            {/* twitter metadata */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={siteMetadata.twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogTwitterImage} />
            {/* canonical link */}
            <link rel="canonical" href={canonicalUrl} />
            {/* open graph metadata */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={siteMetadata.companyName} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={ogImageUrl} /> */}
            <meta property="og:url" content={canonicalUrl} />
            {children}
        </Head>
    )
}

const Home = ({ data }) => {
  const [info, setInfo] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setInfo(new Date().toISOString());
      setLoading(false)
    }, 4000);
  }, [])
  return (
    <main>
      <HeadSeo
                title={`${data[0].name}`}
                description={`Your description goes here on every page. 
                  Keep character count between 140 to 160 characters`}
                canonicalUrl={siteMetadata.siteUrl}
                ogTwitterImage={siteMetadata.siteLogoSquare}
                ogType={"website"}
            />
      <h1>The Starwars films</h1>
      {info}
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export async function getStaticProps () {
  return { props: { data: [{name: new Date().toString()}] } }
}

export default Home
