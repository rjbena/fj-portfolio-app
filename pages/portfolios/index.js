import Link from "next/link";
import { Spinner } from "reactstrap";

import { useGetPosts } from "@/actions";

const Portfolios = () => {
  const { data, error, loading } = useGetPosts();
  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id} style={{ fontSize: "20px" }}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <>
      <h1>I am Portfolio Page</h1>
      {loading && <Spinner>Loading data...</Spinner>}
      {data && <ul>{renderPosts(data)}</ul>}
      {error && <div className="alert alert-danger">{error.message}</div>}
    </>
  );
};

export default Portfolios;
