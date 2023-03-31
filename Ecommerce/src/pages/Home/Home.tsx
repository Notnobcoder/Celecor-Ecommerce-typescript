import "./home.css";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { Link } from "react-router-dom";
import Cardslider from "../../components/Cardslider/Cardslider";
import CardSlider from "../../components/Cardslider/Cardslider";
import CardSlider2 from "../../components/Cardslider2/Cardslider2";
import CardSlider3 from "../../components/Cardslider3/Cardslider3";
export const Home = () => {
  return (
    <div className="Cellecor__padding">
      <section className="Cellecor__home">
        <div className="Cellecor__home-p1">
          <div className="Cellocor__image ">
            <img className="gridimage" src="/Images/image107.png" alt="" />
          </div>
        </div>
        <div className="Cellecor__home-p2">
          <div className="Cellecor__home-p2-image">
            <img src="/Images/21.png" alt="" />
          </div>
        </div>
        <div className="Cellecor__home-p3">
          <div className="Cellecor__home-p2-image">
            <img src="/Images/23.png" alt="" />
          </div>
        </div>
      </section>
      <section className="Cellecor-returns">
        {" "}
        <div className="Cellecor-returns-f">
          <MdOutlineAssignmentReturn size={30} color="red" />
          <div className="Cellecor-returns-items">
            <h6>Easy Returns</h6>
            <p>Shop with Confidence</p>
          </div>
        </div>
        <div className="Cellecor-returns-f">
          <MdOutlineAssignmentReturn size={30} color="red" />
          <div className="Cellecor-returns-items">
            <h6>Support 24/7</h6>
            <p>Dedicated 24/7 Support</p>
          </div>
        </div>
        <div className="Cellecor-returns-f">
          <MdOutlineAssignmentReturn size={30} color="red" />
          <div className="Cellecor-returns-items">
            <h6>Free Shipping</h6>
            <p>Capped at $50 per order</p>
          </div>
        </div>
        <div className="Cellecor-returns-f">
          <MdOutlineAssignmentReturn size={30} color="red" />
          <div className="Cellecor-returns-items">
            <h6>Card Payment</h6>
            <p>12 months Installments</p>
          </div>
        </div>
      </section>
      <Cardslider />
      <div className="Celecor-images">
        <div>
          <img src="Images/image111.png" alt="" />
        </div>
        <div>
          <img src="Images/image112.png" alt="" />
        </div>
        <div>
          <img src="Images/image113.png" alt="" />
        </div>
      </div>
      <div className="Celecor-gagets">
        <div className="Celecor-gagets-image">
          <img
            src="https://img.freepik.com/free-vector/3d-abstract-scene-background_23-2148899300.jpg?w=360"
            alt=""
          />
          <div className="Celecor-gagets-image-items">
            <h4>
              Consumer <br /> elecronics and <br /> gadgets
            </h4>
            <button>Source Now</button>
          </div>
        </div>
        <div className="Celecor-gagets-items">
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image28.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image29.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image32.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image33.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image34.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image35.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image85.png" alt="" />
            </div>
          </div>
          <div className="Celecor-gagets-items-i1">
            <div className="Celecor-gagets-items-i1-items">
              <h5>Smart Watches</h5>
              <p>From USD 19</p>
            </div>
            <div className="Celecor-gagets-items-image">
              <img src="Images/Image/tech/image86.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <CardSlider2 />
      <CardSlider3 />
      <div className="Cellecor-lower-images">
        <div>
          <img src="Images/image115.png" alt="" />
        </div>
        <div>
          <img src="Images/image116.png" alt="" />
        </div>
      </div>
    </div>
    // </div>
  );
};
