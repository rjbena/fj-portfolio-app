import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";

import withAuth from "../../../../hoc/withAuth";
import { useGetBlogById } from "../../../../actions/blogs";

const BlogEditor = () => {
  const saveBlog = async (blog) => {};

  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Blog Updater</h1>
      </div>
      <Editor onSave={saveBlog} />
    </div>
  );
};

export default withAuth(BlogEditor)("admin");
