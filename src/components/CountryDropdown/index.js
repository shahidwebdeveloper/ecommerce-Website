import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={true} className="locationModel">
        <h4>Choose Your Delivery Location</h4>
        <p>Enter Your address and we will specify the offer for your area.</p>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
