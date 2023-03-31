import "./footer.css";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="Cellecor__footer">
      <div className="Cellecor__footer-subscribe">
        <div className="Cellecor__footer-subscribe-news">
          <h1>Subscribe Newsletter</h1>
          <div className="Cellecor__footer-subscribe-email">
            <input placeholder="Enter your email" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <div className="Cellecor__footer-items">
        <div className="Cellecor__footer-items-information">
          <h4>Information</h4>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Sales</p>
          <p>Terms and Conditions</p>
          <p>Shipping Policy</p>
          <p>Emi Payments</p>
        </div>
        <div className="Cellecor__footer-items-information">
          <h4>Account</h4>
          <p>My Account</p>
          <p>My Order</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>Wishlist</p>
          <p>How Does It Work</p>
          <p>Merchant Sign Up</p>
        </div>
        <div className="Cellecor__footer-items-information">
          <h4>Store</h4>
          <p>Affiliate</p>
          <p>Best Sellers</p>
          <p>Discount</p>
          <p>Latest Products</p>
          <p>Sale</p>
          <p>All Collections</p>
          <p>Contact Us</p>
        </div>
        <div className="Cellecor__footer-items-information">
          <h4>Contact Us</h4>
          <p>If you have a question. please contact us</p>
          <p>demo@example.com</p>
          <div className="Cellecor__footer-address">
            <GoLocation color="red" size={27} />
            <p>Your address goes here. 123, Address.</p>
          </div>
          <div className="Cellecor__footer-phone">
            <BsPhone color="red" size={27} />
            <div>
              <p>+ 0 123 456 789</p>
              <p>+ 0 129 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
