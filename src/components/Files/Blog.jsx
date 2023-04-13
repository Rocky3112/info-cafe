import React, { useEffect, useState } from "react";
import "./Blog.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogName, setBlogName] = useState([]);
  const [blogTime, setBlogTime] = useState(0);

  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blog-container">
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogPost key={blog.id} blog={blog} blogName={blogName} setBlogName={setBlogName} blogTime={blogTime} setBlogTime={setBlogTime} />
        ))}
      </div>
      <div className="sidePart">

        <p className="spentTime">Spent time on read :{blogTime} min</p>
        <h3 className="bookmark">Bookmark Blogs {blogName.length} </h3>
        <div className="blogList">
          <h4 className="blogTitle">{blogName}</h4>
        </div>
      </div>
    </div>
  );
};
function BlogPost({ blog, blogName, setBlogName, blogTime, setBlogTime }) {
  const handleTitle = (title) => {
    const checkTitle = blogName.find(tle => tle === title);
    if (checkTitle) {
      toast.error("already bookmarked");
    }
    else {
      setBlogName([...blogName, title]);
      toast.success("Successfully bookmarked");
    }
  }


  return (
    <div className="blog-post">
      <div>
        <img className="blogImg" src={blog.blogImage} />
        <br />

        <div className="author-parent">
          <div className="author">
            <img className="authorImg" src={blog.picture} />
            <div>
              <h3>{blog.name}</h3>
              <p>{blog.date}</p>
            </div>
          </div>
          <div>
            <p onClick={() => handleTitle(blog.title)} >
              05 min read <FontAwesomeIcon icon={faBookmark} />
              </p>
          </div>
        </div>
        <h2>{blog.title}</h2>
      </div>
    </div>
  );
}

export default Blog;
