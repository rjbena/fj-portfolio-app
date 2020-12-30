import { useRouter } from "next/router";
import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";

import withAuth from "../../../../hoc/withAuth";
import { useGetBlogById } from "../../../../actions/blogs";

const BlogEditor = () => {
  const router = useRouter();
  const { data, error, loading } = useGetBlogById(router.query.id);

  const saveBlog = async (blog) => {};

  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Blog Updater</h1>
      </div>
      {data && <Editor onSave={saveBlog} initialContent={data.content} />}
    </div>
  );
};

export default withAuth(BlogEditor)("admin");
