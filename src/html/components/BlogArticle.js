import React from 'react'
import CmsContent from '../includes/CmsContent'

function BlogArticle(c) {    
    return (
        <div className={`c-blog-article ${c.class ? c.class : "" }`}>
            <progress value="0" className="c-blog-article__progress-bar" id="js-blog-article-progress-bar"></progress>
            <div className="container">
                <div className="row">
                    <div className="c-blog-article__header-container">
                        <h1 className="c-blog-article__title">Blog article title would go here</h1>
                        <ul className="c-blog-article__meta">
                            <li className="c-blog-article__meta-item">
                                <time dateTime="2021-01-01">1st Jan 2021</time>
                            </li>
                            <li className="c-blog-article__meta-item">Author Name</li>
                            <li className="c-blog-article__meta-item">5 mins read</li>
                            <li className="c-blog-article__meta-item">
                                <a href="#" className="c-blog-article__category">Category name</a>, <a href="#" className="c-blog-article__category">Category name but longer</a>, <a href="#" className="c-blog-article__category">Category name</a>
                            </li>
                        </ul>
                    </div>
                    <div className="c-blog-article__content-container cms-content">
                        <CmsContent />
                    </div>
                    {                     
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "NewsArticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://boilerplate-flat.syndicut.io/component-blog-article.html"
                                },
                                "headline": "Blog article title would go here",
                                "image": "https://via.placeholder.com/800x800",
                                "datePublished": "2021-01-01T19:00",
                                "dateModified": "2021-01-01T19:00",
                                "author": {
                                    "@type": "Person",
                                    "name": "Author Name"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Syndicut",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://boilerplate-flat.syndicut.io/resources/images/logo.png"
                                    }
                                },
                                "description": "A most wonderful article"
                            })}
                        </script>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogArticle