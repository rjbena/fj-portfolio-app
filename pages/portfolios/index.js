import Link from "next/link";
import { Spinner } from "reactstrap";

import { useGetData } from "@/actions";

const Portfolios = () => {
  const { data, error, loading } = useGetData("/api/v1/posts");
  return (
    <div>
      {loading && <Spinner>Loading...</Spinner>}
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ fontSize: 20 }}>
            <Link href={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {error && <div className="alert alert-danger">{error.message}</div>}
    </div>
  );
};

export default Portfolios;
