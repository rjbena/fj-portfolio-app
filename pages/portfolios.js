import axios from "axios";

import { Link } from "../routes";

const Portfolios = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ fontSize: 20 }}>
            <Link route={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    posts = await res.data.slice(0, 10);
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Portfolios;
