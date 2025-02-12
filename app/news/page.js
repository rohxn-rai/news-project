import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-news">first-news</Link>
        </li>
        <li>
          <Link href="/news/secound-news">secound-news</Link>
        </li>
        <li>
          <Link href="/news/third-news">third-news</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
