import { Link } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Select,
} from "@chakra-ui/react";
import MyCart from "../mycart/Mycart";

const Header = () => {


  const { isOpen, onOpen, onClose } = useDisclosure();
  const Navigate = useNavigate();
  return (
    <div
      style={{
        position: "fixed",
        overflow: "hidden",
        width: "100%",
        top: "0",
        zIndex: "9999",
      }}
    >
      <div class="agileits_header">
        <div class="w3l_offers">
          <Link to="/category">Today's special Offers !</Link>
        </div>
        <div class="w3l_search">
          <form>
            <input
              type="text"
              name="Product"
              value="Search Link product..."
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Search Link product...';}"
              required=""
            />
            <input type="submit" value=" " />
          </form>
        </div>

        <div class="product_list_header">
          <div class="last">
            <fieldset>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <input
                type="submit"
                name="submit"
                value="View your cart"
                class="button"
                onClick={onOpen}
              />
            </fieldset>
          </div>
          <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
            <ModalOverlay />
            <ModalContent>
              <MyCart />
              <ModalCloseButton />
              <ModalBody></ModalBody>
            </ModalContent>
          </Modal>
        </div>
        <div class="w3l_header_right">
          <ul>
            <li class="menu-bar">
              <Link to="#" class="menu-bar">
                <div className="dropdownn">
                  <i class="fa fa-user" aria-hidden="true"></i>

                  <div className="dropdown-contentt">
                    <div class=" sub-menu-1 ">
                      <ul>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>

                        <li>
                          <Link to="/login">Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <span class="sub-menu-1"></span>
              </Link>
              <div class="mega-dropdown-menu"></div>
            </li>
          </ul>
        </div>
        <div
          class="w3l_header_right1"
          style={{
            marginTop: "2rem",
            height: "3rem",
          }}
        >
          <h2>
            <Link to="/contact" >Contact Us</Link>
          </h2>
        </div>
        <div class="clearfix"> </div>
      </div>
      
    </div>
  );
};

export default Header;
