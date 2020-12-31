import { useRouter } from "next/router";
import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";

import withAuth from "../../../../hoc/withAuth";
import { useGetBlogById, useUpdateBlog } from "../../../../actions/blogs";

const BlogEditor = () => {
  const router = useRouter();
  const { data, error, loading } = useGetBlogById(router.query.id);
  const [
    updateBlog,
    { data: updatedBlog, error: updateError, loading: updateLoading },
  ] = useUpdateBlog();

  const _updateBlog = async (blog) => {
    await updateBlog(router.query.id, blog);
    toast.success("Blog updated");
  };

  if (updateError) {
    toast.error(updateError);
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-header-title">Blog Updater</h1>
      </div>
      {data && data.content && (
        <Editor
          onSave={_updateBlog}
          initialContent={data.content}
          loading={updateLoading}
        />
      )}
    </div>
  );
};

export default withAuth(BlogEditor)("admin");
