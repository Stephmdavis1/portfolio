import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Navbar from "../Home/NavBar/Navbar";
import './BlogLists.css'

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);

  let { id } = useParams();

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENT_DELIVERY_API_KEY,
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
            console.log(entries)
          setSingleBlogPost(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  return (
    <>
      <Navbar />
      <div id="layout" className="pure-g">
        <div className="content">
          <div>
            <div className="post">
              <Link to="/updates" className="content-subhead">
                Back to Blog Posts
              </Link>

              <div className="post1">
                <div className="post-header">
                  <img
                    src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
                    title=""
                    alt={singleBlogPost?.fields?.blogTitle}
                    width="578"
                    height="291"
                  />
                  <h2 className="post-title">
                    {singleBlogPost?.fields?.blogTitle}
                  </h2>
                  <p className="post-meta">
                    <span></span>
                    <small>
                      {singleBlogPost?.fields?.createdDate === undefined
                        ? "loading"
                        : new Intl.DateTimeFormat("en-GB", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                          }).format(
                            new Date(singleBlogPost?.fields?.createdDate)
                          )}
                    </small>
                  </p>
                </div>
                <div className="post-description">
                    <ReactMarkdown children={singleBlogPost?.fields?.postContent} />
                    <img
                    src={singleBlogPost?.fields?.contentImages?.[0]?.fields?.file?.url}
                    title=""
                    alt={singleBlogPost?.fields?.contentImages?.[0]?.fields?.fileName}
                    width="578"
                    height="291"
                  />
                </div>
                <div className="post-description">
                <ReactMarkdown children={singleBlogPost?.fields?.contentText} />
                </div>

                <div className="post-description">
                    <img
                    src={singleBlogPost?.fields?.contentImages2?.[0]?.fields?.file?.url}
                    title=""
                    alt={singleBlogPost?.fields?.contentImages2?.[0]?.fields?.fileName}
                    width="578"
                    height="291"
                  />
                </div>
                <div className="post-description">
                <ReactMarkdown children={singleBlogPost?.fields?.contentText2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
