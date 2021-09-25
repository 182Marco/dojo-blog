import { useParams } from 'react-router-dom';
import useFetch from '../customHooks/UseFetch';
import Loading from './Loading';
import SingleBlog from './SingleBlog';

const BlogDetail = () => {
  // variabiles
  const { id } = useParams();
  // comming from costum hook
  const { data: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  //   template
  return (
    <div>
      {isPending && <Loading />}
      {error && <div className='error'>{error}</div>}
      {blog && <SingleBlog blog={blog} />}
    </div>
  );
};

export default BlogDetail;
