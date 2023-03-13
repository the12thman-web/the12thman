import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getAllMenus } from '../utils/wpGraph';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Adsense from './Adsense';

const Header = ({ menus }) => {
  // console.log('menus', menus);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // const [newData, setNewData] = useState([]);

  // console.log("data", data);
  const newValue = menus.edges ? menus.edges[0].node.menuItems.edges : '';

  const dataPost = async () => {
    const value = menus;
    // console.log("value", value);
    setData(value);
  };
  // console.log("values", data);

  const searchHandler = e => {
    setText(e.target.value);
  };

  const openSearchBar = () => {
    setShowSearch(!showSearch);
  };

  const filterData = () => {
    const newData = [];

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === null) {
        const dataObj = {};
        dataObj.menu = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        dataObj.uri = newValue[i].node.uri.split('/').slice(-2, -1)[0];
        newData.push(dataObj);
      }
    }
    return newData;

    // console.log("d", newData);
  };

  const getListByParentID = id => {
    const newData = [];

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.name = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        dataObj.uri = newValue[i].node.uri.split('/').slice(-2, -1)[0];
        newData.push(dataObj);
      }
    }
    return newData;

    // console.log("d", newData);
  };

  // filterData(data);

  const getChildByParentId = id => {
    const newData = [];

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.newLineName = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        dataObj.uri = newValue[i].node.uri.split('/').slice(-2, -1)[0];
        newData.push(dataObj);
      }
    }
    return newData;
  };

  const getNewChildByParentId = id => {
    const newData = [];

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.newNextLineName = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        dataObj.uri = newValue[i].node.uri.split('/').slice(-2, -1)[0];
        newData.push(dataObj);
      }
    }
    return newData;
  };

  const getNewChildrenByParentId = id => {
    const newData = [];

    for (let i = 0; i < newValue.length; i++) {
      if (newValue[i].node.parentId === id) {
        const dataObj = {};
        dataObj.newChildrenName = newValue[i].node.label;
        dataObj.id = newValue[i].node.id;
        dataObj.uri = newValue[i].node.uri.split('/').slice(-2, -1)[0];
        newData.push(dataObj);
      }
    }
    return newData;
  };

  return (
    <>
      <header className="bg-light">
        {/* <!-- Navbar  Top--> */}
        <div className="navigation-wrap navigation-shadow bg-white">
          <nav
            className="navbar navbar-hover navbar-expand-lg navbar-soft container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              // maxWidth: '960px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <Adsense></Adsense>
            <div className="offcanvas-header">
              <div
                data-toggle="modal"
                data-target="#modal_aside_right"
                className="btn-md"
              >
                <span className="navbar-toggler-icon"></span>
              </div>
            </div>
            <div className="logoContainer">
              <Link href="/">
                <Image
                  src={logo}
                  alt="No Image"
                  className="logoImg"
                  height={400}
                />
              </Link>
            </div>
            <div className="container">
              {/* <figure className="mb-0 mx-auto">
                <a href="/homepage-v1.html">
                  <img
                    src="images/placeholder/logo.jpg"
                    alt=""
                    className="img-fluid logo"
                  />
                </a>
              </figure> */}

              <div
                className="collapse navbar-collapse justify-content-between"
                id="main_nav99"
              >
                <ul className="navbar-nav ml-auto ">
                  {filterData().map((items, index) => {
                    const dropDown = getListByParentID(items.id);

                    // console.log("id", items.id);
                    return (
                      <li
                        key={`items.id_${index}`}
                        className="nav-item dropdown"
                      >
                        <Link
                          className={`nav-link active ${
                            dropDown?.length ? 'dropdown-toggle' : ''
                          }`}
                          href={
                            items.menu === 'Home'
                              ? '/'
                              : `/category/${items.uri}`
                          }
                          data-toggle="dropdown"
                        >
                          {items.menu}
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-left">
                          {dropDown.map((val, index) => (
                            <li key={`val.id_${index}`}>
                              <Link
                                className="dropdown-item"
                                href={`/category/${items.uri}`}
                              >
                                {val.name}
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-left">
                                {getChildByParentId(val.id).map(
                                  (child, index) => (
                                    <li key={`child.id_${index}`}>
                                      <Link
                                        className="dropdown-item"
                                        href={`/category/${child.uri}`}
                                      >
                                        {child.newLineName}
                                      </Link>
                                      <ul className="dropdown-menu dropdown-menu-right">
                                        {getNewChildByParentId(child.id).map(
                                          (pre_child, index) => (
                                            <li key={`pre_child.id_${index}`}>
                                              <Link
                                                className="dropdown-item"
                                                href={`/category/${pre_child.uri}`}
                                              >
                                                {pre_child.newNextLineName}
                                              </Link>
                                              <ul className="dropdown-menu dropdown-menu-right">
                                                {getNewChildrenByParentId(
                                                  pre_child.id
                                                ).map((children, index) => (
                                                  <li
                                                    key={`children.id_${index}`}
                                                  >
                                                    <Link
                                                      className="dropdown-item"
                                                      href={`/category/${children.uri}`}
                                                    >
                                                      {children.newChildrenName}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </ul>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </li>
                                  )
                                )}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>

                {/* <!-- Search bar.// --> */}
                <ul className="navbar-nav ">
                  <li
                    className="nav-item search hidden-xs hidden-sm "
                    onClick={openSearchBar}
                  >
                    {' '}
                    <Link className="nav-link" href="">
                      <i className="fa fa-search"></i>
                    </Link>
                  </li>
                </ul>
                {/* <!-- Search content bar.// --> */}

                <div
                  className={
                    'navigation-shadow ' +
                    (showSearch ? 'top-search-show' : 'top-search-hide')
                  }
                >
                  <div className="container">
                    <div className="input-group ">
                      <form action="/search" className="text-justify w-100">
                        <div className="row no-gutters mt-3">
                          <div className="col">
                            <input
                              className="form-control border-secondary border-right-0 rounded-0"
                              type="search"
                              //   value=""
                              placeholder="Search "
                              id="example-search-input4"
                              value={text}
                              onChange={e => setText(e.target.value)}
                            />
                          </div>
                          <div className="col-auto">
                            <Link
                              className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                              href={{
                                pathname: '/search/' + text,
                                query: {
                                  search: text,
                                },
                              }}
                            >
                              <i className="fa fa-search"></i>
                            </Link>
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
                        type="search"
                        //   value=""
                        placeholder="Search "
                        id="example-search-input4"
                        value={text}
                        onChange={e => setText(e.target.value)}
                      />
                    </div>
                    <div className="col-auto">
                      <Link
                        className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                        href={{
                          pathname: '/search/' + text,
                          query: {
                            search: text,
                          },
                        }}
                      >
                        <i className="fa fa-search"></i>
                      </Link>
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
                  <ul className="navbar-nav">
                    {filterData().map((items, index) => {
                      const dropDown = getListByParentID(items.id);

                      return (
                        <li
                          key={`items.id_${index}`}
                          className="nav-item dropdown"
                        >
                          <Link
                            className={`nav-link active ${
                              dropDown?.length ? 'dropdown-toggle' : ''
                            } text-dark`}
                            href={
                              dropDown.length ? '' : `/category/${items.uri}`
                            }
                            data-toggle="dropdown"
                          >
                            {items.menu}
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-left">
                            {dropDown.map((val, index) => {
                              const getChildByParentIdDropDown =
                                getChildByParentId(val.id);
                              return (
                                <li key={`val.id_${index}`}>
                                  <Link
                                    className={`dropdown-item text-dark ${
                                      getChildByParentIdDropDown?.length
                                        ? 'dropdown-toggle'
                                        : ''
                                    }`}
                                    href={
                                      getChildByParentIdDropDown.length
                                        ? ''
                                        : `/category/${val.uri}`
                                    }
                                  >
                                    {val.name}
                                  </Link>
                                  <ul className="submenu dropdown-menu  animate fade-up">
                                    {getChildByParentIdDropDown.map(
                                      (child, index) => {
                                        const getNewChildByParentIdDropDown =
                                          getNewChildByParentId(child.id);
                                        return (
                                          <li key={`child.id_${index}`}>
                                            <Link
                                              className={`dropdown-item text-dark ${
                                                getNewChildByParentIdDropDown?.length
                                                  ? 'dropdown-toggle'
                                                  : ''
                                              }`}
                                              href={
                                                getNewChildByParentIdDropDown
                                                  ? ''
                                                  : `/category/${child.uri}`
                                              }
                                            >
                                              {child.newLineName}
                                            </Link>

                                            <ul className="submenu dropdown-menu  animate fade-up">
                                              {getNewChildByParentIdDropDown.map(
                                                (pre_child, index) => {
                                                  const getNewChildrenByParentIdDropDown =
                                                    getNewChildrenByParentId(
                                                      pre_child.id
                                                    );
                                                  return (
                                                    <li
                                                      key={`child.id_${index}`}
                                                    >
                                                      <Link
                                                        className={`dropdown-item text-dark ${
                                                          getNewChildrenByParentIdDropDown?.length
                                                            ? 'dropdown-toggle'
                                                            : ''
                                                        }`}
                                                        href={
                                                          getNewChildrenByParentIdDropDown.length
                                                            ? ''
                                                            : `/category/${items.uri}`
                                                        }
                                                        data-toggle="dropdown"
                                                      >
                                                        {
                                                          pre_child.newNextLineName
                                                        }
                                                      </Link>
                                                      <ul className="submenu dropdown-menu  animate fade-up">
                                                        {getNewChildrenByParentIdDropDown.map(
                                                          (children, index) => (
                                                            <li
                                                              key={`pre_child.id_${index}`}
                                                            >
                                                              <Link
                                                                className="dropdown-item text-dark"
                                                                href={`/category/${children.uri}`}
                                                              >
                                                                {
                                                                  children.newChildrenName
                                                                }
                                                              </Link>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </li>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="modal-footer">
                <p>
                  © 2023
                  <a href="http://the12thmen.com">THE12THMEN.COM</a>.
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
