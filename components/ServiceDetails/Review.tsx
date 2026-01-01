import './review.css'
export default function TestimonialCard() {
  return (
    <>
    
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="testimonial-card">
          <div className="row g-0">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="left-section">
                <h2>Brian Ferguson</h2>
                <p className="subtitle">
                  Executive Director, Project Impact<br />
                  Mississippi
                </p>
                
                <p className="testimonial-text">
                  &quot;It&apos;s been an awesome experience. It feels like we&apos;re a family.
                </p>
                
                <button className="check-review-btn">
                  Check Review
                </button>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-md-6">
              <div className="right-section">
                <div className="rating-score">5.0</div>
                
                <div className="rating-item">
                  <span className="rating-label">Quality</span>
                  <span className="rating-value">5.0</span>
                </div>
                
                <div className="rating-item">
                  <span className="rating-label">Schedule</span>
                  <span className="rating-value">5.0</span>
                </div>
                
                <div className="rating-item">
                  <span className="rating-label">Cost</span>
                  <span className="rating-value">5.0</span>
                </div>
                
                <div className="rating-item">
                  <span className="rating-label">Willing to Refer</span>
                  <span className="rating-value">5.0</span>
                </div>
                
                <div className="powered-by">
                  Powered by <strong>Clutch</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
                  </div>
              </div>
        
      </div>
    </>
  );
}