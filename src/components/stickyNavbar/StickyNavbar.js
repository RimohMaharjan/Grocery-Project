import { Link } from "react-router-dom";
import "./stickyNavbar.css";

const StickyNavbar = () => {
  return (
    <div class="banner">
      <div class="w3l_banner_nav_left">
        <nav
          class="navbar nav_bottom"
          style={{ width: "400px", height: "380px" }}
        >
          <div class="navbar-header nav_2">
            <button
              type="button"
              class="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div
            className="sticky-bar-container"
            style={{ backgroundColor: "white", width: "200px" }}
          >
            <div class="dropdown">
              <div>
                <Link to="/product">
                  <span>Branded Foods</span>{" "}
                </Link>
              </div>
            </div>
            <div className="dropdown">
              <div>
                <Link to="/product">Households</Link>
              </div>
            </div>
            <div class="dropdown">
              <h6> Veggies & Fruits</h6>
              <div class="dropdown-content">
                <div>
                  <Link to="/product">Vegetables</Link>
                </div>

                <div>
                  <Link to="/product">Fruits</Link>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <Link to="/product">Kitchen</Link>
            </div>
            <div class="dropdown">
              <Link to="/ShortCode">Short Codes</Link>
            </div>
            <div class="dropdown">
              <h6>Beverages</h6>
              <div class="dropdown-content">
                <div>
                  <Link to="/product">Soft Drinks</Link>
                </div>
                <div>
                  <Link to="/product">Juices</Link>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <Link to="/product">Pet Food</Link>
            </div>
            <div class="dropdown">
              <h6>Frozen food</h6>
              <div class="dropdown-content">
                <div>
                  <Link to="/product">Frozen Snacks</Link>
                </div>
                <div>
                  <Link to="/product">Frozen Nonveg</Link>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <Link to="/product">Bread & Bakery</Link>
            </div>
          </div>
        </nav>

        {/* <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul class="nav navbar-nav nav_1">
                <li>
                  <Link to="/product">Branded Foods</Link>
                </li>
                <li>
                  <Link to="/household">Households</Link>
                </li>
                <li class="dropdown mega-dropdown active">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    Veggies & Fruits<span class="caret"></span>
                  </Link>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <Link to="/vegetables">Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/vegetables">Fruits</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/kitchen">Kitchen</Link>
                </li>
                <li>
                  <Link to="/shortcode">Short Codes</Link>
                </li>
                <li class="dropdown">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    Beverages<span class="caret"></span>
                  </Link>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <Link to="/drinks">Soft Drinks</Link>
                        </li>
                        <li>
                          <Link to="/drinks">Juices</ Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/pet">Pet Food</Link>
                </li>
                <li class="dropdown">
                  <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                    Frozen Foods<span class="caret"></span>
                  </Link>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <Link to="/frozen">Frozen Snacks</Link>
                        </li>
                        <li>
                          <Link to="/frozen">Frozen Nonveg</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/bread">Bread & Bakery</Link>
                </li>
              </ul>
            </div>
          </nav> */}
      </div>
    </div>
  );
};

export default StickyNavbar;
