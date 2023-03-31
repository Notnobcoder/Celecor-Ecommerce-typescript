import Carousel from "react-multi-carousel";
import { FiHeart } from "react-icons/fi";
import "react-multi-carousel/lib/styles.css";
import { Rating } from "react-simple-star-rating";
import "./cardslider.css";

const CardSlider2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="card-container">
      <div className="card-container-nav">
        <div className="card-container-nav-heading">
          <h1>New Arrivals</h1>
        </div>
        <div className="card-container-nav-items">
          <ul>
            <li>Audio & Video</li>
            <li>Gamming</li>
            <li>HeadPhone</li>
          </ul>
        </div>
        <div className="card-container-nav-viewall">
          <button>view all</button>
        </div>
      </div>
      <hr />
      <Carousel responsive={responsive}>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-2.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-3.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-4.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-3.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
        <div className="card">
          <div className="card-relative position-relative">
            <img src="/Images/image110-1.png" alt="" />
            <div className="position-absolute card-absolute">
              <p>New</p>
              <div className="heart">
                <FiHeart size={27} />
              </div>
            </div>
          </div>
          <h6>Android Television Super New DGT -256</h6>
          <p className="price">$256.00</p>
          <Rating readonly initialValue={5} size={18} />
        </div>
      </Carousel>
    </div>
  );
};

export default CardSlider2;
