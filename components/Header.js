import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DateShow from "./DateShow";
import { getAllMenus } from "../utils/wpGraph";

const Header = () => {
  const [data, setData] = useState([]);
  // const [newData, setNewData] = useState([]);
  const newValue = data.edges ? data.edges[0].node.menuItems.edges : "";

  const dataPost = async () => {
    const value = await getAllMenus();

    setData(value);
  };
  console.log("values", data);

  useEffect(() => {
    dataPost();
  }, []);

  const filterData = () => {
    const newData = [];
    const newValue = data.edges ? data.edges[0].node.menuItems.edges : "";

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === null) {
        const dataObj = {};
        dataObj.menu = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        newData.push(dataObj);
      }
    }
    return newData;

    // console.log("d", newData);
  };

  const getListByParentID = (id) => {
    const newData = [];
    const newValue = data.edges ? data.edges[0].node.menuItems.edges : "";

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.name = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        newData.push(dataObj);
      }
    }
    return newData;

    // console.log("d", newData);
  };

  // filterData(data);

  const getChildByParentId = (id) => {
    const newData = [];
    const newValue = data.edges ? data.edges[0].node.menuItems.edges : "";

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.newLineName = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        newData.push(dataObj);
      }
    }
    return newData;
  };

  const getNewChildByParentId = (id) => {
    const newData = [];
    const newValue = data.edges ? data.edges[0].node.menuItems.edges : "";

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.newNextLineName = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        newData.push(dataObj);
      }
    }
    return newData;
  };

  const getNewChildrenByParentId = (id) => {
    const newData = [];
    const newValue = data.edges ? data.edges[0].node.menuItems.edges : "";

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.newChildrenName = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        newData.push(dataObj);
      }
    }
    return newData;
  };

  return (
    <>
      <header className="bg-light">
        {/* <!-- Navbar  Top--> */}
        <div className="topbar d-none d-sm-block">
          <div className="container ">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div className="topbar-left">
                  <div className="topbar-text">
                    <DateShow />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div className="list-unstyled topbar-right">
                  <ul className="topbar-link">
                    <li>
                      <a href="#" title="">
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="/contact" title="">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Login / Register
                      </a>
                    </li>
                  </ul>
                  <ul className="topbar-sosmed">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Navbar Top  --> */}
        {/* <!-- Navbar  --> */}
        {/* <!-- Navbar menu  --> */}
        <div className="navigation-wrap navigation-shadow bg-white">
          <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
            <div className="container">
              <div className="offcanvas-header">
                <div
                  data-toggle="modal"
                  data-target="#modal_aside_right"
                  className="btn-md"
                >
                  <span className="navbar-toggler-icon"></span>
                </div>
              </div>
              {/* <figure className="mb-0 mx-auto">
                <a href="/homepage-v1.html">
                  <img
                    src="images/placeholder/logo.jpg"
                    alt=""
                    className="img-fluid logo"
                  />
                </a>
              </figure> */}
              <div>
                <h2>TWELFTH MAN TIMES</h2>
              </div>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="main_nav99"
              >
                <ul className="navbar-nav ml-auto ">
                  {filterData().map((items) => {
                    // console.log("id", items.id);
                    return (
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link active dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          {items.menu}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">
                          {getListByParentID(items.id).map((val) => (
                            <li>
                              <a
                                className="dropdown-item"
                                href="/homepage-v1.html"
                              >
                                {val.name}
                              </a>
                              <ul className="dropdown-menu dropdown-menu-left">
                                {getChildByParentId(val.id).map((child) => (
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="/homepage-v1.html"
                                    >
                                      {child.newLineName}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      {getNewChildByParentId(child.id).map(
                                        (pre_child) => (
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="/homepage-v1.html"
                                            >
                                              {pre_child.newNextLineName}
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                              {getNewChildrenByParentId(
                                                pre_child.id
                                              ).map((children) => (
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/homepage-v1.html"
                                                  >
                                                    {children.newChildrenName}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}

                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      {" "}
                      Pages{" "}
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a
                          className="dropdown-item icon-arrow"
                          href="/blogscat"
                        >
                          {" "}
                          Blog{" "}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a className="dropdown-item" href="/category">
                              Style 1
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/category-style-v2.html"
                            >
                              Style 2
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/category-style-v3.html"
                            >
                              Style 3
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item icon-arrow" href="">
                              Submenu item 3{" "}
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a className="dropdown-item" href="">
                                  Multi level 1
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="">
                                  Multi level 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item" href="">
                              Submenu item 4
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="">
                              Submenu item 5
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item icon-arrow"
                          href="/blogscat"
                        >
                          {" "}
                          Blog single detail{" "}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href="/article-detail-v1.html"
                            >
                              Style 1
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/article-detail-v2.html"
                            >
                              Style 2
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/article-detail-v3.html"
                            >
                              Style 3
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="dropdown-item icon-arrow" href="#">
                          {" "}
                          Search Result{" "}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href="/search-result.html"
                            >
                              Style 1
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/search-result-v1.html"
                            >
                              Style 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/login.html">
                          Login{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/register.html">
                          {" "}
                          Register{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/contact">
                          {" "}
                          Contact{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/404.html">
                          {" "}
                          404 Error{" "}
                        </a>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link active dropdown-toggle"
                      href="/about"
                      data-toggle="dropdown"
                    >
                      {" "}
                      About{" "}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="/about">
                          {" "}
                          Style 1{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/about-us-v1.html">
                          {" "}
                          Style 2{" "}
                        </a>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item dropdown has-megamenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      {" "}
                      News{" "}
                    </a>
                    <div
                      className="dropdown-menu animate fade-down megamenu mx-auto"
                      role="menu"
                    >
                      <div className="container wrap__mobile-megamenu">
                        <div className="col-megamenu">
                          <h5 className="title">Recent news</h5>
                          <hr />
                          {/* <!-- Popular news carousel --> */}
                          <div className="popular__news-header-carousel">
                            <div className="top__news__slider">
                              <div className="item">
                                {/* <!-- Post Article --> */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    {/* <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a> */}
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">
                                          by david hall
                                        </span>
                                        ,
                                      </li>

                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat
                                        sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* <!-- Post Article --> */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    {/* <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a> */}
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">
                                          by david hall
                                        </span>
                                        ,
                                      </li>

                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat
                                        sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* <!-- Post Article --> */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    {/* <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a> */}
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">
                                          by david hall
                                        </span>
                                        ,
                                      </li>

                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat
                                        sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* <!-- Post Article --> */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    {/* <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a> */}
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">
                                          by david hall
                                        </span>
                                        ,
                                      </li>

                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat
                                        sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* <!-- Post Article --> */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    {/* <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a> */}
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">
                                          by david hall
                                        </span>
                                        ,
                                      </li>

                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat
                                        sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- col-mega// --> */}
                      </div>
                    </div>
                    {/* <!-- dropdown-mega-menu.// --> */}
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/category">
                      {" "}
                      Category{" "}
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      {" "}
                      contact{" "}
                    </a>
                  </li> */}
                </ul>

                {/* <!-- Search bar.// --> */}
                <ul className="navbar-nav ">
                  <li className="nav-item search hidden-xs hidden-sm ">
                    {" "}
                    <a className="nav-link" href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
                {/* <!-- Search content bar.// --> */}
                <div className="top-search navigation-shadow">
                  <div className="container">
                    <div className="input-group ">
                      <form action="#">
                        <div className="row no-gutters mt-3">
                          <div className="col">
                            <input
                              className="form-control border-secondary border-right-0 rounded-0"
                              type="search"
                              //   value=""
                              placeholder="Search "
                              id="example-search-input4"
                            />
                          </div>
                          <div className="col-auto">
                            <a
                              className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                              href="/search-result.html"
                            >
                              <i className="fa fa-search"></i>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- Search content bar.// --> */}
              </div>

              {/* <!-- navbar-collapse.// --> */}
            </div>
          </nav>
        </div>
        {/* <!-- End Navbar menu  --> */}

        {/* <!-- Navbar sidebar menu  --> */}
        <div
          id="modal_aside_right"
          className="modal fixed-left fade"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-aside" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="widget__form-search-bar  ">
                  <div className="row no-gutters">
                    <div className="col">
                      <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        // value=""
                        placeholder="Search"
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <nav className="list-group list-group-flush">
                  <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link active dropdown-toggle text-dark"
                        href="#"
                        data-toggle="dropdown"
                      >
                        {" "}
                        Home
                      </a>
                      <ul className="dropdown-menu dropdown-menu-left">
                        <li>
                          <a
                            className="dropdown-item text-dark"
                            href="/homepage-v1.html"
                          >
                            {" "}
                            Home version one{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-dark"
                            href="homepage-v2.html"
                          >
                            {" "}
                            Home version two{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-dark"
                            href="/homepage-v3.html"
                          >
                            {" "}
                            Home version three{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-dark"
                            href="/homepage-v4.html"
                          >
                            {" "}
                            Home version four{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle  text-dark"
                        href="#"
                        data-toggle="dropdown"
                      >
                        {" "}
                        Pages{" "}
                      </a>
                      <ul className="dropdown-menu animate fade-up">
                        <li>
                          <a
                            className="dropdown-item icon-arrow  text-dark"
                            href="/blogscat"
                          >
                            {" "}
                            Blog{" "}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li>
                              <a
                                className="dropdown-item"
                                href="/category-style-v1.html"
                              >
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/category-style-v2.html"
                              >
                                Style 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/category-style-v3.html"
                              >
                                Style 3
                              </a>
                            </li>

                            <li>
                              <a
                                className="dropdown-item icon-arrow  text-dark"
                                href=""
                              >
                                Submenu item 3{" "}
                              </a>
                              <ul className="submenu dropdown-menu  animate fade-up">
                                <li>
                                  <a className="dropdown-item" href="">
                                    Multi level 1
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="">
                                    Multi level 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="dropdown-item  text-dark" href="">
                                Submenu item 4
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                Submenu item 5
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="dropdown-item icon-arrow  text-dark"
                            href="/blogscat"
                          >
                            {" "}
                            Blog single detail{" "}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li>
                              <a
                                className="dropdown-item"
                                href="/article-detail-v1.html"
                              >
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/article-detail-v2.html"
                              >
                                Style 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/article-detail-v3.html"
                              >
                                Style 3
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a
                            className="dropdown-item icon-arrow  text-dark"
                            href="#"
                          >
                            {" "}
                            Search Result{" "}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li>
                              <a
                                className="dropdown-item"
                                href="/search-result.html"
                              >
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/search-result-v1.html"
                              >
                                Style 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="dropdown-item  text-dark"
                            href="/login.html"
                          >
                            Login{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item  text-dark"
                            href="/register.html"
                          >
                            {" "}
                            Register{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item  text-dark"
                            href="/contact"
                          >
                            {" "}
                            Contact{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item  text-dark"
                            href="/404.html"
                          >
                            {" "}
                            404 Error{" "}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link active dropdown-toggle  text-dark"
                        href="#"
                        data-toggle="dropdown"
                      >
                        {" "}
                        About
                      </a>
                      <ul className="dropdown-menu dropdown-menu-left">
                        <li>
                          <a className="dropdown-item" href="/about">
                            {" "}
                            Style 1{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about-us-v1.html">
                            {" "}
                            Style 2{" "}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link  text-dark" href="/category">
                        {" "}
                        Category{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-dark" href="/contact">
                        {" "}
                        contact{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="modal-footer">
                <p>
                  © 2020{" "}
                  <a
                    href="http://retenvi.com"
                    title="Premium WordPress news &amp; magazine theme"
                  >
                    Magzrenvi
                  </a>
                  - Premium template news, blog & magazine &amp; magazine theme
                  by{" "}
                  <a href="http://retenvi.com" title="retenvi">
                    RETENVI.COM
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          {/* <!-- modal-bil// --> */}
        </div>
        {/* <!-- modal.// --> */}
        {/* <!-- End Navbar sidebar menu  --> */}
        {/* <!-- End Navbar  --> */}
      </header>
    </>
  );
};

export default Header;

// export async function getStaticProps({ params }) {
//   console.log("hi");
//   const menus = await getAllMenus();
//   return {
//     props: {
//       menus,
//     },
//     revalidate: 10, // In seconds
//   };
// }
