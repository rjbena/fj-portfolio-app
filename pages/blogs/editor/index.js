import { useRouter } from "next/router";
import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";

import withAuth from "../../../hoc/withAuth";
import { useCreateBlog } from "../../../actions/blogs";
import Redirect from "../../../components/shared/Redirect";

const BlogEditor = () => {
  const router = useRouter();
  const [createBlog, { data: createdBlog, error, loading }] = useCreateBlog();

  const saveBlog = async (blog) => {
    await createBlog(blog);
  };

  if (createdBlog) {
    return <Redirect to={`/blogs/editor/${createdBlog._id}`} />;
  }

  if (error) {
    toast.error(error.message);
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Blog Editor</h1>
      </div>
      <Editor onSave={saveBlog} loading={loading} />
    </div>
  );
};

export default withAuth(BlogEditor)("admin");
