import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AnimateWrapper from '../common/PageAnimation';
import Loader from '../components/Loader';
import { getDay } from '../common/date';
import BlogInteraction from '../components/BlogInteraction';
import BlogPostCard from '../components/BlogPostCard';
import BlogContent from '../components/BlogContent';
import CommentsContainer, { fetchComments } from '../components/CommentsContainer';

export const blogStructure = {
    title: '',
    des: '',
    banner: '',
      tags: '',
    author: { personal_info: {} },
    activity: {},
    content: [],
    publishedAt: '',
  };

  export const BlogContext = createContext({});

const BlogPage = () => {

    let { blog_id } = useParams();


    const [blog, setBlog] = useState(blogStructure);
  const [similarBlog, setSimilarBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLikedByUser, setIsLikedByUser] = useState(false);
  const [commentWrapper, setCommentWrapper] = useState(false);
  const [totalParentCommentLoaded, setTotalParentCommentLoaded] = useState(0);


  let {
    title,
   
    banner,
    content,
    author: {
      personal_info: { fullname, username: author_username, profile_img },
    },
    
    publishedAt,
  } = blog; 

    const fetchBlog = () => {
        //This get blog
        axios
          .post(import.meta.env.VITE_SERVER_DOMAIN + '/blogs/get-blog', { blog_id }) //blog ID is sent to d backend
          .then(async ({ data: { blog } }) => {
           
            blog.comments = await fetchComments({
              
              blog_id: blog._id,
              setParentCountFunc: setTotalParentCommentLoaded,
            });
            
           
            setBlog(blog);
            axios
              .post(import.meta.env.VITE_SERVER_DOMAIN + '/blogs/search-blogs', {
                tag: blog.tags,
                limit: 6,
                eliminate_blog: blog_id, 
              })
            
              .then(({ data }) => {
                setSimilarBlogs(data.blogs);
                
              });

              
    
            // //{data:{blog}}  => this destructure blog from data
            // // console.log(blog);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      };

      useEffect(() => {
        resetState();
        fetchBlog();
      }, [blog_id]);

      const resetState=()=>{
         setBlog(blogStructure)
         setSimilarBlogs(null)
         setLoading(true)
         setIsLikedByUser(false)
         setCommentWrapper(false)
         setTotalParentCommentLoaded(0)
      }


  return (
    <AnimateWrapper>
      {loading ? (
        <Loader />
      ) : (
        <BlogContext.Provider
          value={{
            blog,
            setBlog,
            isLikedByUser,
            setIsLikedByUser,
            commentWrapper,
            setCommentWrapper,
            totalParentCommentLoaded,
            setTotalParentCommentLoaded,
          }}
        >
          <CommentsContainer  />
          <div className="max-w-[900px] center py-10 max-lg:px-[5vw]">
            <img src={banner} className="aspect-video" />
            <div className="mt-12">
             
              <h2>{title}</h2>
              <div className="flex max-sm:flex-col justify-between my-8">
                <div className="flex gap-5 items-start">
                  <img src={profile_img} className="w-12 h-12 rounded-full" />

                  <p className="capitalize">
                    {fullname}
                    <br />@
                    <Link to={`/user/${author_username}`} className="underline">
                      {author_username}
                    </Link>
                  </p>
                </div>
                <p className="text-dark-grey opacity-75 max-sm:mt-6 max-sm:ml-12 max-sm:pl-5">
                  Published on {getDay(publishedAt)}
                </p>
              </div>
            </div>

            <BlogInteraction />

            <div className="my-12 font-gelasio blog-page-content">
              {content[0]?.blocks?.map((block, i) => {
                return (
                  <div key={i} className="my-4 md:my-8">
                    <BlogContent block={block} />
                  </div>
                );
              })}
            </div>
            <BlogInteraction />
            {similarBlog != null && similarBlog.length ? (
              <>
                <h1 className="text-2xl mt-14 mb-10 font-medium">
                  Similar blogs
                </h1>
                {similarBlog.map((blog, i) => {
                  let {
                    author: { personal_info },
                  } = blog;

                  return (
                    <AnimateWrapper
                      key={i}
                      transition={{ duration: 1, delay: i * 0.08 }}
                    >
                      <BlogPostCard content={blog} author={personal_info} />
                    </AnimateWrapper>
                  );
                })}
              </>
            ) : (
              ''
            )}
          </div>
          </BlogContext.Provider>
      )}
    </AnimateWrapper>
  )
}

export default BlogPage