import './index.css'

function Card() {
  return (
    <div className="card-background">
      <div className="card-container">
        <div>
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goa-c2-img.png"
            alt="nature"
            className="image"
          />
        </div>
        <div className="space">
          <h4 className="heading">
            25 Outstanding <br />
            Scenic Hikes
          </h4>
          <p>
            if hiking for you is all about the
            <br /> breathtaking scenary, try this gorgeous
            <br />
            day hikes.
          </p>
          <h5>2 hours ago</h5>
          <hr />
          <div className="container">
            <p>
              <span className="blue">#dayhikes</span>
            </p>

            <button type="button" className="button">
              Share<i className="fas fa-share share">.</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
