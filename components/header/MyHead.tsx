import Head from "next/head";

const seo = {
  keywords: "领课学院的关键字",
  description: "这是领课学院",
  title: "领课学院",
};

export default function MyHead() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={seo.keywords} />
      <meta name="description" content={seo.description} />
      <title>{seo.title}</title>
      <link
        rel="icon"
        href="https://static-dev.roncoo.com/course/133f1c0dc6634da9a9fb67e98d8f489d.ico"
      />
    </Head>
  );
}
