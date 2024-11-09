import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link } from 'react-router-dom'
import './BlogLists.css'

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const client = createClient({ space: import.meta.env.VITE_SPACE_KEY, accessToken: import.meta.env.VITE_CONTENT_API_KEY })
//   const client = createClient({ space: "9cbe8t5ezxep", accessToken: "nAs6nVtKP9k0ZKhD-M8PBRhrwd-UNxWLi6GciYQg0Cw" })


  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [])



  return (
    <div id="layout" className="pure-g">
      <div className="content">
        <div>
          <div className="post">
            <h1 className="content-subhead">My Blog</h1>

            {blogPosts?.items?.map((post) => (
              <div className="post" key={post.sys.id}>
                <div className="post-header">
                  <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.blogTitle} width="600" height="391" />
                  <h2 className="post-title">{post.fields.blogTitle}</h2>
                  <p className="post-meta">
                      <span></span>
                    <small>
                      {new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(new Date(post.fields.createdDate))}
                    </small>
                  </p>
                </div>
                <div className="post-description">
                  <p>{post.fields.blogSummary}
                  </p>
                  <Link
                    to={`/blogDetails/${post.sys.id}`}
                    className="button button1">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>


         
        </div>
      </div>
    </div>
  )
}

export default BlogList