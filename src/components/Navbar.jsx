// import { Outlet, Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FcMenu } from "react-icons/fc";
// import { GrClose } from "react-icons/gr";
// import { FaUserCircle } from "react-icons/fa";
// import {AiOutlineShoppingCart} from 'react-icons/ai'
// import  {useMyContext } from "../context/Context.jsx";
// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const {cart} =useMyContext()

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };

//     const homeLink = document.getElementById("home-link");

//     if (homeLink) {
//       homeLink.addEventListener("click", (e) => {
//         e.preventDefault(); // Prevent default navigation behavior
//         handleScrollToTop(); // Scroll to top
//         navigate("/"); // Navigate to the home route
//         toggleNav(); // Close the navigation menu
//       });
//     }

//     return () => {
//       if (homeLink) {
//         homeLink.removeEventListener("click", handleScrollToTop);
//       }
//     };
//   }, [navigate]);

//   return (
//     <div className="navbar-container">
//       <nav className={isOpen ? "navbar expanded" : "navbar"}>
//         <div className="logo">
//           <h1>Y&A's</h1>
//         </div>
//         <div>
//           <ul className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
//             <li className="item">
//               <Link
//                 to="/"
//                 id="home-link"
//                 className="links link-color"
//                 onClick={toggleNav}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="item">
//               <Link
//                 to="/aboutme"
//                 className="links link-color"
//                 activeClassName="active-link"
//                 onClick={toggleNav}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="item">
//               {/* <Link
//                 to="/services"
//                 className="links link-color"
//                 activeClassName="active-link"
//                 onClick={toggleNav}
//               >
//                 Services
//               </Link> */}
//             </li>
//             <li className="contact-btn item">
//               <button>
//                 <Link
//                   to="/contacts"
//                   className="links"
//                   activeClassName="active-link"
//                   onClick={toggleNav}
//                 >
//                   Contact
//                 </Link>
//               </button>
//             </li>
//             {/* <li className="cart ">
              
//               <Link className="links" to="/cart">
//                 < AiOutlineShoppingCart className="cart-btn"/>
//                 <span className="quantity">{cart.length}</span>
//               </Link>
           
//           </li> */}
//             <li className="profile-btn">
//               <Link to="/login" className="links">
//                 <FaUserCircle className="user" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="hamburger" onClick={toggleNav}>
//           {isOpen ? <GrClose /> : <FcMenu />}
//         </div>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// export default Navbar;




// import { Outlet, Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FcMenu } from "react-icons/fc";
// import { GrClose } from "react-icons/gr";
// import { FaUserCircle } from "react-icons/fa";
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { useMyContext } from "../context/Context.jsx";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
//   const navigate = useNavigate();
//   const { cart } = useMyContext();

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     const handleScrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };

//     const homeLink = document.getElementById("home-link");

//     if (homeLink) {
//       homeLink.addEventListener("click", (e) => {
//         e.preventDefault(); // Prevent default navigation behavior
//         handleScrollToTop(); // Scroll to top
//         navigate("/"); // Navigate to the home route
//         toggleNav(); // Close the navigation menu
//       });
//     }

//     return () => {
//       if (homeLink) {
//         homeLink.removeEventListener("click", handleScrollToTop);
//       }
//     };
//   }, [navigate]);

//   return (
//     <div className="navbar-container">
//       <nav className={isOpen ? "navbar expanded" : "navbar"}>
//         <div className="logo">
//           <h1>Y&A's</h1>
//         </div>
//         <div>
//           <ul className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
//             <li className="item">
//               <Link
//                 to="/"
//                 id="home-link"
//                 className="links link-color"
//                 onClick={toggleNav}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="item">
//               <Link
//                 to="/aboutme"
//                 className="links link-color"
//                 activeClassName="active-link"
//                 onClick={toggleNav}
//               >
//                 About
//               </Link>
//             </li>
//             {/* Categories Dropdown */}
//             <li className="item dropdown">
//               <button onClick={toggleDropdown} className="links link-color">
//                 Categories
//               </button>
//               {isDropdownOpen && (
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="/disease1" onClick={toggleNav}>
//                       Disease 1
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease2" onClick={toggleNav}>
//                       Disease 2
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease3" onClick={toggleNav}>
//                       Disease 3
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease4" onClick={toggleNav}>
//                       Disease 4
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease5" onClick={toggleNav}>
//                       Disease 5
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease6" onClick={toggleNav}>
//                       Disease 6
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease7" onClick={toggleNav}>
//                       Disease 7
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease8" onClick={toggleNav}>
//                       Disease 8
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease9" onClick={toggleNav}>
//                       Disease 9
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/disease10" onClick={toggleNav}>
//                       Disease 10
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="contact-btn item">
//               <button>
//                 <Link
//                   to="/contacts"
//                   className="links"
//                   activeClassName="active-link"
//                   onClick={toggleNav}
//                 >
//                   Contact
//                 </Link>
//               </button>
//             </li>
//             {/* <li className="cart ">
//               <Link className="links" to="/cart">
//                 <AiOutlineShoppingCart className="cart-btn" />
//                 <span className="quantity">{cart.length}</span>
//               </Link>
//             </li> */}
//             <li className="profile-btn">
//               <Link to="/login" className="links">
//                 <FaUserCircle className="user" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="hamburger" onClick={toggleNav}>
//           {isOpen ? <GrClose /> : <FcMenu />}
//         </div>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// export default Navbar;



import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io'; // Import arrow icon
import { useMyContext } from "../context/Context.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const navigate = useNavigate();
  const { cart } = useMyContext();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const homeLink = document.getElementById("home-link");

    if (homeLink) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default navigation behavior
        handleScrollToTop(); // Scroll to top
        navigate("/"); // Navigate to the home route
        toggleNav(); // Close the navigation menu
      });
    }

    return () => {
      if (homeLink) {
        homeLink.removeEventListener("click", handleScrollToTop);
      }
    };
  }, [navigate]);

  return (
    <div className="navbar-container">
      <nav className={isOpen ? "navbar expanded" : "navbar"}>
        <div className="logo">
          <h1>AYA</h1>
        </div>
        <div>
          <ul className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
            <li className="item">
              <Link
                to="/"
                id="home-link"
                className="links link-color"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="item">
              <Link
                to="/aboutme"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                About
              </Link>
            </li>
            {/* Categories Dropdown */}
            <li className="item dropdown">
              <button onClick={toggleDropdown} className="links link-color dropdown-button">
                Categories <IoMdArrowDropdown className="dropdown-arrow" />
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/disease1" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease2" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease3" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 3
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease4" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 4
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease5" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 5
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease6" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 6
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease7" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 7
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease8" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 8
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease9" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 9
                    </Link>
                  </li>
                  <li>
                    <Link to="/disease10" onClick={() => {toggleDropdown(); toggleNav();}}>
                      Disease 10
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="contact-btn item">
              <button>
                <Link
                  to="/contacts"
                  className="links"
                  activeClassName="active-link"
                  onClick={toggleNav}
                >
                  Contact
                </Link>
              </button>
            </li>
            {/* <li className="cart ">
              <Link className="links" to="/cart">
                <AiOutlineShoppingCart className="cart-btn" />
                <span className="quantity">{cart.length}</span>
              </Link>
            </li> */}
            <li className="profile-btn">
              <Link to="/login" className="links">
                <FaUserCircle className="user" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {isOpen ? <GrClose /> : <FcMenu />}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
