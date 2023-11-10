import config from "@config/config.json";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  metaKeywords,
  canonical = true,
  children,
  schema = null
}) => {
  const { meta_image, meta_author, meta_description, meta_keywords } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();
  const currentPath = router.asPath !== "/" ? router.asPath + "/" : router.asPath ;

  return (
    <>
      <Head>
        {/* title */}
        <title>
          {
            meta_title ? meta_title : title ? title : config.site.title
          }
        </title>

        {/* canonical url */}
        {canonical && <link rel="canonical" href={base_url+currentPath} id='canonical-link' itemProp="url" />}

        {/* noindex robots */}
        {/* {noindex && <meta name="robots" content="noindex,nofollow" />} */}
        <meta name="robots" content="index, follow" />

        {/* meta-description */}
        <meta
          name="description"
          content={description ? description : meta_description}
        />

        <meta name="keywords" content={metaKeywords ? metaKeywords : meta_keywords}></meta>

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

        {/* og-title */}
        <meta
          property="og:title"
          content={
            meta_title ? meta_title : title ? title : config.site.title
          }
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={description ? description : meta_description}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={
            meta_title ? meta_title : title ? title : config.site.title
          }
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={description ? description : meta_description}
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />

        {schema && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />}
      </Head>
      <Header />
      {/* main site */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
