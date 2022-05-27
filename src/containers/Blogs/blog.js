import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./blog.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Articles } from "../../components";

function Blog(props) {

  const [categories, setCategories] = useState([
    {
      name: 'All',
      path: '/blog',
      count: 80
    },
    {
      name: 'Blockchain',
      path: '/blockchain',
      count: 10
    },
    {
      name: 'Cloud Computing',
      path: '/cloud_computing',
      count: 30
    },
    {
      name: 'Digital Marketing',
      path: '/digital_marketing',
      count: 22
    },
  ])

  return (
    <div className="blog_section mt-4 mb-5">
      <div className="blog_container container">
        <div className="blog_upper_part row">
          <div className="col-md-2 col-12 col-sm-6">
            <h3>Blog</h3>
          </div>
          <div className="col-md-5 col-12 col-sm-8">
            <div className="search_blog_container">
              <div className="input-group curved-border">
                <span className="input-group-append">
                  <button className="btn blog-search-btn" type="button">
                    <i>
                      <AiOutlineSearch />
                    </i>
                  </button>
                </span>
                <input
                  className="form-control blog-search-input"
                  type="text"
                  value="search"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 blog_articles_section">

          <div className="col-md-8 col-lg-8 col-sm-12 col-12">
            <h4 className="article_heading">
              All <span className="subtext_color">Blogs</span>
            </h4>
            <div className="articles_container">
              <Articles number={4} readmore={true} />
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 col-12 bl-2px">
            <h4 className="article_heading">
              All <span className="subtext_color">Categories</span>
            </h4>
            <div className="categories_list">
              {
                categories.map((ele, i) => {
                  return (
                    <div key={i}>
                      <NavLink exact to={{
                        pathname: `${ele.path}`
                      }}
                        activeStyle={{ color: 'red' }} className="cat_list_item">{ele.name} ({ele.count})</NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Blog;
