import React from 'react'
import BlogListingItem from './BlogListingItem'

function BlogListing(c) {
  return (
        <div className={`c-blog-listing ${c.class ? c.class : "" }`}>
            <div className="container">
                {c.filtered ?
                <div className="row">
                    <div className="c-blog-listing__filtered">
                        <div className="c-blog-listing__filtered-wrapper">
                            <div className="c-blog-listing__filtered-label">Showing posts in the category '<span>Category</span>'</div>
                            <a href="" className="c-blog-listing__filtered-link c-btn c-btn--small">Show all posts</a>
                        </div>
                    </div>
                </div> : ""
                }
                {c.header ?
                <div className="row">
                    <div className="c-blog-listing__header">
                        <h2 className="c-blog-listing__header-title">{c.header}</h2>
                        <a href="" className="c-blog-listing__header-link c-btn c-btn--small">View all</a>
                    </div>
                </div> : ""
                }
                <div className="row">
                    {!c.featured ?
                    <>
                    <BlogListingItem title="Blog title would go here" image="placeholder.png" />
                    <BlogListingItem title="Blog title would go here" image="placeholder.png" />
                    <BlogListingItem title="Blog title would go here" image="placeholder.png" />
                    </> : "" }
                    <BlogListingItem title="Blog title would go here" image="placeholder.png" />
                    <BlogListingItem title="Blog title would go here" image="placeholder.png" />
                    <BlogListingItem title="Blog title would go here" image="placeholder.png" />
                </div>
            </div>
        </div>
    )
}

export default BlogListing