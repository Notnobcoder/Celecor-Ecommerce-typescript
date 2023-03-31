import "./header.css";
import {
  BsCartFill,
  BsHeartFill,
  BsSearch,
  BsPersonFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
export const Header = () => {
  return (
    <div className="Celecor__header">
      <div className="Celecor__header-upper">
        <p>World Wide Completely Free Returns and Free Shipping</p>
      </div>
      <div className="Celecor__header-lower">
        <div className="Celecor__header-lower-logo">
          <img src="/Images/Logo_B1.png" alt="logo" />
        </div>
        <div className="Celecor__header-lower-input">
          <input type="text" placeholder="Search" />
          <span className="inner-group-text">
            <BsSearch color="white" />
          </span>
        </div>
        <div className="Celecor__header-lower-items">
          <div className="Celecor__header-lower-items-i1">
            <BsPersonFill color="grey" size={25} />
            <p>User</p>
          </div>
          <div className="Celecor__header-lower-items-i1">
            <BsHeartFill color="grey" size={25} />
            <p>Wishlist</p>
          </div>
          <div className="Celecor__header-lower-items-i1">
            <BsCartFill color="grey" size={25} />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="Celecor__header-below">
        <div className="Celecor__header-below-flex">
          <GiHamburgerMenu color="white" />
          <h5>All Categories</h5>
        </div>
        <div className="Celecor__header-below-list">
          <p>Home</p>
          <p>About</p>
          <p>Shop</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="Celecor__header-below-call">
          <RiCustomerService2Fill size={27} color="red" />
          <div className="Celecor__header-below-call-items">
            <h6>Call Us 24/7</h6>
            <h4>
              <span>+91 1234 456 789</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
