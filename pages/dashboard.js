import { Row, Col, Button } from "reactstrap";
import Link from "next/link";
import { toast } from "react-toastify";

import Masthead from "../components/shared/MastHead";
import PortDropdown from "../components/shared/Dropdown";
import withAuth from "../hoc/withAuth";
//import { getBlogByUser } from "../lib/api/blogs";
import { useUpdateBlog, useGetBlogByUser } from "../actions/blogs";
const Dashboard = () => {
  const [updateBlog] = useUpdateBlog();
  const { data: blogs, mutate, loading } = useGetBlogByUser();

  const changeBlogStatus = async (id, status) => {
    await updateBlog(id, { status })
      .then(() => mutate())
      .catch(() => toast.error("Something went wrong..."));
  };

  const createOptions = (blog) => {
    const option =
      blog.status === "draft"
        ? { view: "Publish Story", value: "published" }
        : { view: "Make a Draft", value: "draft" };
    return [
      {
        key: `${blog._id}-published`,
        text: option.view,
        handlers: { onClick: () => changeBlogStatus(blog._id, option.value) },
      },
      {
        key: `${blog._id}-delete`,
        text: "Delete",
        handlers: { onClick: () => changeBlogStatus(blog._id, "deleted") },
      },
    ];
  };

  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      {blogs
        .filter((blog) => blog.status === status)
        .map((blog) => (
          <li key={blog._id}>
            <Link href={`/blogs/editor/${blog._id}`}>
              <a>{blog.title}</a>
            </Link>
            <PortDropdown items={createOptions(blog)} />
          </li>
        ))}
    </ul>
  );

  return (
    <>
      {loading && <p>Loading....</p>}
      {blogs && (
        <ul>
          <Masthead imagePath="/images/home-bg.jpg">
            <span className="subheading">
              Let's write some nice blog today{" "}
              <Link href="/blogs/editor">
                <Button color="primary">Create a new Blog</Button>
              </Link>
            </span>
          </Masthead>
          <div className={"base-page blog-user-page"}>
            <Row>
              <Col md="6" className="mx-auto text-center">
                <h2 className="blog-status-title"> Published Blogs </h2>
                {renderBlogs(blogs, "published")}
              </Col>
              <Col md="6" className="mx-auto text-center">
                <h2 className="blog-status-title"> Draft Blogs </h2>
                {renderBlogs(blogs, "draft")}
              </Col>
            </Row>
          </div>
          ;
        </ul>
      )}
    </>
  );
};

// export const getServerSideProps = async () => {
//   const blogs = await getBlogByUser();
//   return {
//     props: {
//       blogs,
//     },
//   };
// };
export default withAuth(Dashboard)("admin");
