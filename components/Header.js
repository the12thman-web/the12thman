import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getAllMenus } from '../utils/wpGraph';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Adsense from './Adsense';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
const BASE_URL = 'https://staging.the12thman.in/';

const Header = ({ menus }) => {
  // console.log('menus', menus);
  const [data, setData] = useState([]);
  // const [text, setText] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  // const [newData, setNewData] = useState([]);

  // console.log("data", data);
  const newValue = menus.edges ? menus.edges[0].node.menuItems.edges : '';

  const dataPost = async () => {
    const value = menus;
    // console.log("value", value);
    setData(value);
  };
  // console.log("values", data);

  // const searchHandler = e => {
  //   setText(e.target.value);
  // };

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

  const clickedData = [];
  const openSideBar = () => {
    console.log('prtk');
    setShowSideBar(!showSideBar);
  };

  // const routing = (uri, subMenu) => {
  //   console.log('uri: ', uri);
  //   if (subMenu) {
  //     const index = clickedData.indexOf(uri);
  //     if (index === -1) {
  //       console.log('pushed');
  //       clickedData.push(uri);
  //     } else {
  //       //send to route
  //       console.log('sending');
  //       clickedData.splice(index, 1);
  //       router.push(BASE_URL + '/category/' + href);
  //     }
  //   }
  // };
  return (
    <>
      <header className="bg-light">
        <Adsense></Adsense>
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
            <div className="offcanvas-header">
              <div
                data-toggle="modal"
                className="btn-md"
                onClick={() => openSideBar()}
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
                {/* <ul className="navbar-nav ">
                  <li
                    className="nav-item search hidden-xs hidden-sm "
                    onClick={openSearchBar}
                  >
                    {' '}
                    <Link className="nav-link" href="">
                      <i className="fa fa-search"></i>
                    </Link>
                  </li>
                </ul> */}
                {/* <!-- Search content bar.// --> */}

                {/* <div
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
                              value=""
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
                </div> */}

                {/* <!-- Search content bar.// --> */}
              </div>

              {/* <!-- navbar-collapse.// --> */}
            </div>
          </nav>
        </div>
        {/* <!-- End Navbar menu  --> */}
        {/* <!-- Navbar sidebar menu  --> */}
        <Sidebar
          defaultCollapsed={showSideBar}
          collapsedWidth="0"
          style={{
            backgroundColor: 'rgb(249 249 249)',
            position: showSideBar ? 'absolute' : 'relative',
          }}
          backgroundColor="#fffff"
        >
          <Menu>
            {filterData().map((items, index) => {
              const dropDown = getListByParentID(items.id);
              if (dropDown.length) {
                return (
                  <SubMenu label={items.menu}>
                    {dropDown.map((val, index) => {
                      const dropDown2 = getListByParentID(val.id);
                      if (dropDown2.length) {
                        return (
                          <SubMenu label={val.name}>
                            {dropDown2.map((val2, index) => {
                              const dropDown3 = getListByParentID(val2.id);
                              if (dropDown3.length) {
                                return (
                                  <SubMenu label={val2.name}>
                                    {dropDown3.map((val3, index) => {
                                      const dropDown4 = getListByParentID(
                                        val3.id
                                      );
                                      if (dropDown4.length) {
                                        return (
                                          <SubMenu label={val3.name}>
                                            {dropDown4.map((val4, index) => {
                                              const dropDown5 =
                                                getListByParentID(val4.id);
                                              if (dropDown5.length) {
                                                return (
                                                  <SubMenu label={val4.name}>
                                                    {dropDown5.map(
                                                      (val5, index) => {
                                                        const dropDown6 =
                                                          getListByParentID(
                                                            val5.id
                                                          );

                                                        if (dropDown6.length) {
                                                          return (
                                                            <SubMenu
                                                              label={val5.name}
                                                            >
                                                              {dropDown6.map(
                                                                (
                                                                  val6,
                                                                  index
                                                                ) => {
                                                                  const dropDown7 =
                                                                    getListByParentID(
                                                                      val6.id
                                                                    );
                                                                  if (
                                                                    dropDown7.length
                                                                  ) {
                                                                    return (
                                                                      <SubMenu
                                                                        label={
                                                                          val6.name
                                                                        }
                                                                      >
                                                                        {dropDown7.map(
                                                                          (
                                                                            val7,
                                                                            index
                                                                          ) => {
                                                                            const dropDown8 =
                                                                              getListByParentID(
                                                                                val7.id
                                                                              );
                                                                            if (
                                                                              dropDown8.length
                                                                            ) {
                                                                              return (
                                                                                <SubMenu
                                                                                  label={
                                                                                    val7.name
                                                                                  }
                                                                                >
                                                                                  {dropDown8.map(
                                                                                    (
                                                                                      val8,
                                                                                      index
                                                                                    ) => {
                                                                                      const dropDown9 =
                                                                                        getListByParentID(
                                                                                          val8.id
                                                                                        );

                                                                                      if (
                                                                                        dropDown9.length
                                                                                      ) {
                                                                                        return (
                                                                                          <SubMenu
                                                                                            label={
                                                                                              val8.name
                                                                                            }
                                                                                          >
                                                                                            {dropDown9.map(
                                                                                              (
                                                                                                val9,
                                                                                                index
                                                                                              ) => {
                                                                                                <MenuItem
                                                                                                  href={`/category/${val9.uri}`}
                                                                                                >
                                                                                                  {' '}
                                                                                                  {
                                                                                                    val9.name
                                                                                                  }{' '}
                                                                                                </MenuItem>;
                                                                                              }
                                                                                            )}
                                                                                          </SubMenu>
                                                                                        );
                                                                                      } else {
                                                                                        return (
                                                                                          <MenuItem
                                                                                            href={`/category/${val8.uri}`}
                                                                                          >
                                                                                            {' '}
                                                                                            {
                                                                                              val8.name
                                                                                            }{' '}
                                                                                          </MenuItem>
                                                                                        );
                                                                                      }
                                                                                    }
                                                                                  )}
                                                                                </SubMenu>
                                                                              );
                                                                            } else {
                                                                              return (
                                                                                <MenuItem
                                                                                  href={`/category/${val7.uri}`}
                                                                                >
                                                                                  {' '}
                                                                                  {
                                                                                    val7.name
                                                                                  }{' '}
                                                                                </MenuItem>
                                                                              );
                                                                            }
                                                                          }
                                                                        )}
                                                                      </SubMenu>
                                                                    );
                                                                  } else {
                                                                    return (
                                                                      <MenuItem
                                                                        href={`/category/${val6.uri}`}
                                                                      >
                                                                        {' '}
                                                                        {
                                                                          val6.name
                                                                        }{' '}
                                                                      </MenuItem>
                                                                    );
                                                                  }
                                                                }
                                                              )}
                                                            </SubMenu>
                                                          );
                                                        } else {
                                                          return (
                                                            <MenuItem
                                                              href={`/category/${val5.uri}`}
                                                            >
                                                              {' '}
                                                              {val5.name}{' '}
                                                            </MenuItem>
                                                          );
                                                        }
                                                      }
                                                    )}
                                                  </SubMenu>
                                                );
                                              } else {
                                                return (
                                                  <MenuItem
                                                    href={`/category/${val4.uri}`}
                                                  >
                                                    {' '}
                                                    {val4.name}{' '}
                                                  </MenuItem>
                                                );
                                              }
                                            })}
                                          </SubMenu>
                                        );
                                      } else {
                                        return (
                                          <MenuItem
                                            href={`/category/${val3.uri}`}
                                          >
                                            {' '}
                                            {val3.name}{' '}
                                          </MenuItem>
                                        );
                                      }
                                      // <MenuItem> {val3.name} </MenuItem>;
                                    })}
                                  </SubMenu>
                                );
                              } else {
                                return (
                                  <MenuItem href={`/category/${val2.uri}`}>
                                    {' '}
                                    {val2.name}{' '}
                                  </MenuItem>
                                );
                              }
                            })}
                          </SubMenu>
                        );
                      } else {
                        return (
                          <MenuItem href={`/category/${val.uri}`}>
                            {' '}
                            {val.name}{' '}
                          </MenuItem>
                        );
                      }
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <MenuItem href={`/category/${items.uri}`}>
                    {' '}
                    {items.menu}{' '}
                  </MenuItem>
                );
              }
            })}
          </Menu>
        </Sidebar>
        ;{/* <!-- modal.// --> */}
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
