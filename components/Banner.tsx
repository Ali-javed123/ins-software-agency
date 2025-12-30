import React from 'react'

const Banner = ({ title }: { title: string }) => {
  return (
    <>
            <section className="page-header">
  <div className="page-header__bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg-1-1.jpg)'}} />
  <div className="container">
    <h2 className="page-header__title">{title.toUpperCase()}</h2>
    <ul className="ostech-breadcrumb list-unstyled">
      <li><a href="index.html">Home</a></li>
      <li><span>{title.toUpperCase()}</span></li>
    </ul>
  </div>
</section>

 
    </>
  )
}

export default Banner
