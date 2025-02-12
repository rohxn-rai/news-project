import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newItem) => (
          <li key={newItem.id}>
            <Link href={`/news/${newItem.slug}`}>
              <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
              <span>{newItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
