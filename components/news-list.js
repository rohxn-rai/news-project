import Link from "next/link";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newItem) => (
        <li key={newItem.id}>
          <Link href={`/news/${newItem.slug}`}>
            <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
            <span>{newItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
