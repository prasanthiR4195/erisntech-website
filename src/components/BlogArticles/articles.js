import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../../assets/blog/blog.png';
import './blogarticle.css';
import { BsArrowRight } from "react-icons/bs";
function Articles({ number, readmore }) {

    const displayArticle = () => {
        return [...Array(number)].map((e, i) => {
            return (
                <div key={i} className='row article-row'>
                    <div className='article-image-column pl-0 col-md-4 col-sm-12 col-12 col-lg-4'>
                        <img src={blogImage} alt="blog_image" className="img-fluid w-100" />
                    </div>
                    <div className='article-desc-column col-md-8 col-sm-12 col-12 col-lg-8'>
                        <span className='artcile_date_source'>MARCH 28, 2022 / SHOPIFY V/S WOOCOMMERCE</span>
                        <p className='article_title'>Shopify V/S WooCommerce- Which is the Better Online Shopping Platform?</p>
                        <span className='article_desc mb-3'>With global e-commerce sales skyrocketing and reaching $4.28 trillion, there has never been a better time to start an online store. However, choosing the ….</span>
                        {readmore ? <Link to="/" className='subtext_color'><span className='mr-2 font-weight-bolder'>Read More</span><BsArrowRight /></Link> : null}
                    </div>

                </div>)
        });
    }

    return (
        <>
            {displayArticle()}
        </>
    );
}

export default Articles;