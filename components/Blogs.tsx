import React from 'react'

const Blogs = () => {
  return (
    <>
{/* Blog section Start */}
<section className="blog-one blog-one--home">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
          <div className="d-flex align-items-center justify-content-center">
            <img src="/assets/images/shapes/sec-title-s-1.png" alt="Article" className="sec-title__img" />
            <h6 className="sec-title__tagline">Article</h6>
          </div>
          <h3 className="sec-title__title">Latest News &amp; Articles from <br /> the Blog Posts</h3>
        </div>
      </div>
    </div>
    <div className="row gutter-y-30">
      <div className="col-md-6 col-lg-4">
        <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
          <div className="blog-card__image">
            <img src="/assets/images/blog/blog-1-1.png" alt="@@title" />
            <img src="/assets/images/blog/blog-1-1.png" alt="@@title" />
            <a href="blog-details-right.html" className="blog-card__image__link"><span className="sr-only">@@title</span></a>
            <div className="blog-card__date"><span>08</span>Jun</div>
          </div>
          <div className="blog-card__content">
            <ul className="list-unstyled blog-card__meta">
              <li><a href="#"><img src="assets/images/blog/blog-author-1-1.jpg" alt="ostech" /> Jane Cooper</a></li>
              <li><a href="#"><i className="icon-bubble-chat-1" />2 Comments</a></li>
            </ul>
            <div className="blog-card__content__inner">
              <h3 className="blog-card__title"><a href="blog-details-right.html">Improving Business Growth with New Technology</a></h3>
              <a href="blog-details-right.html" className="blog-card__link">Read more<i className="icon-arrow-left" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
          <div className="blog-card__image">
            <img src="/assets/images/blog/blog-1-2.png" alt="@@title" />
            <img src="/assets/images/blog/blog-1-2.png" alt="@@title" />
            <a href="blog-details-right.html" className="blog-card__image__link"><span className="sr-only">@@title</span></a>
            <div className="blog-card__date"><span>09</span>DEC</div>
          </div>
          <div className="blog-card__content">
            <ul className="list-unstyled blog-card__meta">
              <li><a href="#"><img src="assets/images/blog/blog-author-1-2.jpg" alt="ostech" /> Annette Black</a></li>
              <li><a href="#"><i className="icon-bubble-chat-1" />2 Comments</a></li>
            </ul>
            <div className="blog-card__content__inner">
              <h3 className="blog-card__title"><a href="blog-details-right.html">Improving Business Growth with New Technology</a></h3>
              <a href="blog-details-right.html" className="blog-card__link">Read more<i className="icon-arrow-left" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
          <div className="blog-card__image">
            <img src="/assets/images/blog/blog-1-3.png" alt="@@title" />
            <img src="/assets/images/blog/blog-1-3.png" alt="@@title" />
            <a href="blog-details-right.html" className="blog-card__image__link"><span className="sr-only">@@title</span></a>
            <div className="blog-card__date"><span>07</span>AUG</div>
          </div>
          <div className="blog-card__content">
            <ul className="list-unstyled blog-card__meta">
              <li><a href="#"><img src="assets/images/blog/blog-author-1-3.jpg" alt="ostech" /> Eleanor Pena</a></li>
              <li><a href="#"><i className="icon-bubble-chat-1" />2 Comments</a></li>
            </ul>
            <div className="blog-card__content__inner">
              <h3 className="blog-card__title"><a href="blog-details-right.html">Improving Business Growth with New Technology</a></h3>
              <a href="blog-details-right.html" className="blog-card__link">Read more<i className="icon-arrow-left" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Blog section End */}
 
    </>
  )
}

export default Blogs
