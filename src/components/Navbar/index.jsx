import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { NavbarContainer, NavbarResponsive } from "./style";
import { NavLink } from "react-router-dom";
import { Button, Input } from "antd";

function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <NavbarContainer isScrolled={isScrolled}>
        <h3 className="title">Online Shopping</h3>
        <div className="items">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active font_family"
                : "item font_family"
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/likes"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active font_family"
                : "item font_family"
            }
          >
            Yoqtirganlar
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active font_family"
                : "item font_family"
            }
          >
            Mening akkauntim
          </NavLink>
        </div>
        <div className="serach">
          <div className="search-input">
            <button className="serch">
              <BsSearch size={18} />
            </button>
            <Input placeholder="Qidiruv" className="input" />
          </div>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "cart " : "cart "
            }
          >
            <AiOutlineShoppingCart
              size={22}
              style={{ background: "none " }}
              color="white"
            />
          </NavLink>
        </div>
      </NavbarContainer>
      <NavbarResponsive isScrolled={isScrolled} open={open}>
        <div className="nav">
          <h3 className="title">Online Shopping</h3>
          <HiOutlineMenu
            size={22}
            className="hamburger"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className="items">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active font_family"
                : "item font_family"
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/likes"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active font_family"
                : "item font_family"
            }
          >
            Yoqtirganlar
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active font_family"
                : "item font_family"
            }
          >
            Mening akkauntim
          </NavLink>
        </div>
        <div className="serach">
          <div className="search-input">
            <button className="serch">
              <BsSearch size={18} />
            </button>
            <Input placeholder="Qidiruv" className="input" />
          </div>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "cart " : "cart "
            }
          >
            <AiOutlineShoppingCart
              size={22}
              style={{ background: "none " }}
              color="white"
            />
          </NavLink>
        </div>
      </NavbarResponsive>
    </div>
  );
}

export default Navbar;
