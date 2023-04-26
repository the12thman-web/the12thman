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
            <SubMenu label="IPL 2023">
              <SubMenu label="IPL Teams">
                <MenuItem href={`/category/chennai super kings/`}>
                  Chennai Super Kings &#8211; CSK
                </MenuItem>
                <MenuItem href={`/category/delhi capitals/`}>
                  Delhi Capitals &#8211; DC
                </MenuItem>
                <MenuItem href={`/category/gujarat titans/`}>
                  Gujarat Titans &#8211; GT
                </MenuItem>
                <MenuItem href={`/category/kolkata knight riders/`}>
                  Kolkata knight Riders &#8211; KKR
                </MenuItem>
                <MenuItem href={`/category/lucknow super giants/`}>
                  Lucknow Super Giants -LSG
                </MenuItem>
                <MenuItem href={`/category/mumbai indians/`}>
                  Mumbai Indians -MI
                </MenuItem>
                <MenuItem href={`/category/punjab kings/`}>
                  Punjab Kings -PKBS
                </MenuItem>
                <MenuItem href={`/category/rajasthan royals/`}>
                  Rajasthan Royals &#8211; RR
                </MenuItem>
                <MenuItem href={`/category/royal challengers bangalore/`}>
                  Royal Challengers Bangalore RCB
                </MenuItem>
                <MenuItem href={`/category/sunrisers hyderabad/`}>
                  Sunrisers Hyderabad -SRH
                </MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="NBA">
              <SubMenu label="Eastern Conference">
                <MenuItem href={`/category/miami heat/`}>Miami Heat</MenuItem>
                <MenuItem
                  href={`/category
                  washington wizards/`}
                >
                  Washington Wizard
                </MenuItem>
              </SubMenu>
              <SubMenu label="Western Conference">
                <MenuItem href={`/category/los angeles clippers/`}>
                  Los Angeles Clippers
                </MenuItem>
                <MenuItem href={`/category/utah jazz/`}>Utah Jazz</MenuItem>
                <MenuItem href={`/category/phoenix suns/`}>
                  Phoenix Suns
                </MenuItem>
                <MenuItem href={`/category/denver nuggets/`}>
                  Denver Nuggets
                </MenuItem>
                <MenuItem href={`/category/dallas mavericks/`}>
                  Dallas Mavericks
                </MenuItem>
                <MenuItem href={`/category/portland trail blazers/`}>
                  Portland Trail Blazers
                </MenuItem>
                <MenuItem href={`/category/los angeles lakers/`}>
                  Los Angeles Lakers
                </MenuItem>
                <MenuItem href={`/category/memphis grizzlies/`}>
                  Memphis Grizzlies
                </MenuItem>
                <MenuItem href={`/category/golden state warriors/`}>
                  Golden State Warriors
                </MenuItem>
                <MenuItem href={`/category/san antonio spurs/`}>
                  San Antonio Spurs
                </MenuItem>
                <MenuItem href={`/category/new orleans pelicans/`}>
                  New Orleans Pelicans
                </MenuItem>
                <MenuItem href={`/category/sacramento kings/`}>
                  Sacramento Kings
                </MenuItem>
                <MenuItem href={`/category/oklahoma city thunder/`}>
                  Oklahoma City Thunder
                </MenuItem>
                <MenuItem href={`/category/houston rockets/`}>
                  Houston Rockets
                </MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="Motor Sports">
              <MenuItem href={`/category/formula 1`}>F1</MenuItem>
              <MenuItem href={`/category/moto gp`}>Moto GP</MenuItem>
            </SubMenu>
            <MenuItem href={`/category/nfl`}>NFL</MenuItem>
            <SubMenu label="Football">
              <SubMenu label="Domestic Leagues">
                <SubMenu label="English Premier League">
                  <MenuItem href={`/category/arsenal/`}>Arsenal</MenuItem>
                  <MenuItem href={`/category/chelsea/`}>Chelsea</MenuItem>
                  <MenuItem href={`/category/everton/`}>Everton</MenuItem>
                  <MenuItem href={`/category/leicester city/`}>
                    Leicester City
                  </MenuItem>
                  <MenuItem href={`/category/liverpool/`}>Liverpool</MenuItem>
                  <MenuItem href={`/category/manchester city/`}>
                    Manchester City
                  </MenuItem>
                  <MenuItem href={`/category/manchester united/`}>
                    Manchester United
                  </MenuItem>
                  <MenuItem href={`/category/newcastle united/`}>
                    Newcastle United
                  </MenuItem>
                  <MenuItem href={`/category/tottenham hotspur/`}>
                    Tottenham Hotspur
                  </MenuItem>
                  <MenuItem href={`/category/west ham united/`}>
                    West Ham United
                  </MenuItem>
                </SubMenu>
                <SubMenu label="La Liga">
                  <MenuItem href={`/category/atletic bilbao/`}>
                    Atletic Bilbao
                  </MenuItem>
                  <MenuItem href={`/category/atletico madrid/`}>
                    Atletico Madrid
                  </MenuItem>
                  <MenuItem href={`/category/barcelona/`}>Barcelona</MenuItem>
                  <MenuItem href={`/category/real betis/`}>Real Betis</MenuItem>
                  <MenuItem href={`/category/real madrid/`}>
                    Real Madrid
                  </MenuItem>
                  <MenuItem href={`/category/real sociedad/`}>
                    Real Sociedad
                  </MenuItem>
                  <MenuItem href={`/category/Sevilla`}>Sevilla</MenuItem>
                  <MenuItem href={`/category/Valencia`}>Valencia</MenuItem>
                  <MenuItem href={`/category/Villarreal`}>Villarreal</MenuItem>
                </SubMenu>
                <SubMenu label="Bundesliga">
                  <MenuItem href={`/category/bayer leverkusen/`}>
                    Bayer Leverkusen
                  </MenuItem>
                  <MenuItem href={`/category/bayern munich/`}>
                    Bayern Munich
                  </MenuItem>
                  <MenuItem href={`/category/borussia dortmund/`}>
                    Borussia Dortmund
                  </MenuItem>
                  <MenuItem href={`/category/borussia monchengladbach/`}>
                    Borussia Monchengladbach
                  </MenuItem>
                  <MenuItem href={`/category/eintracht frankfurt/`}>
                    Eintracht Frankfurt
                  </MenuItem>
                  <MenuItem href={`/category/rb leipzig/`}>RB Leipzig</MenuItem>
                </SubMenu>
                <SubMenu label="Serie A">
                  <MenuItem href={`/category/ac milan/`}>AC Milan</MenuItem>
                  <MenuItem href={`/category/inter milan/`}>
                    Inter Milan
                  </MenuItem>
                  <MenuItem href={`/category/juventus/`}>Juventus</MenuItem>
                  <MenuItem href={`/category/ss lazio/`}>Lazio</MenuItem>
                  <MenuItem href={`/category/napoli/`}>Napoli</MenuItem>
                  <MenuItem href={`/category/as roma`}>Roma</MenuItem>
                </SubMenu>
                <SubMenu label="Ligue 1">
                  <MenuItem href={`/category/lyon`}>Lyon</MenuItem>
                  <MenuItem href={`/category/Marseille`}>Marseille</MenuItem>
                  <MenuItem href={`/category/Monaco FC`}>Monaco FC</MenuItem>
                  <MenuItem href={`/category/paris saint germain/`}>
                    PSG
                  </MenuItem>
                </SubMenu>
                <MenuItem href={`/category/mls`}>MLS</MenuItem>
                <MenuItem href={`/category/Indian Super League`}>
                  Indian Super League
                </MenuItem>
              </SubMenu>
              <SubMenu label="Domestic League Cups">
                <MenuItem href={`/category/league cup/`}>EFL Cup</MenuItem>
                <MenuItem href={`/category/fa cup`}>FA Cup</MenuItem>
                <MenuItem href={`/category/copa del ray/`}>
                  Copa Del Ray
                </MenuItem>
                <SubMenu label="UEFA">
                  <MenuItem href={`/category/uefa champions league/`}>
                    UEFA Champions League
                  </MenuItem>
                  <MenuItem href={`/category/europa league/`}>
                    UEFA Europa League
                  </MenuItem>
                  <MenuItem href={`/category/uefa conference league/`}>
                    UEFA Conference League
                  </MenuItem>
                </SubMenu>
              </SubMenu>
              <MenuItem href={`/category/Fantasy Football`}>
                Fantasy Football
              </MenuItem>
            </SubMenu>

            <SubMenu label="Cricket">
              <SubMenu label="Cricket Teams">
                <MenuItem href={`/category/australia cricket team`}>
                  Australia Cricket Team
                </MenuItem>
                <MenuItem href={`/category/bangladesh cricket team`}>
                  Bangladesh Cricket Team
                </MenuItem>
                <MenuItem href={`/category/england cricket team`}>
                  England Cricket Team
                </MenuItem>
                <MenuItem href={`/category/indian cricket team`}>
                  Indian Cricket Team
                </MenuItem>
                <MenuItem href={`/category/new zealand cricket team`}>
                  New Zealand Cricket Team
                </MenuItem>
                <MenuItem href={`/category/pakistan cricket team/`}>
                  Pakistan Cricket Team
                </MenuItem>
                <MenuItem href={`/category/south africa cricket team/`}>
                  South Africa Cricket Team
                </MenuItem>
              </SubMenu>
              <SubMenu label="Cricket Series">
                <MenuItem href={`/category/india vs bangladesh/`}>
                  India vs Bangladesh
                </MenuItem>
                <MenuItem href={`/category/australia vs south africa/`}>
                  South Africa tour of Australia
                </MenuItem>
                <MenuItem href={`/category/pakistan vs new zealand/`}>
                  Pakistan vs New Zealand
                </MenuItem>
                <MenuItem href={`/category/india vs sri lanka/`}>
                  Sri Lanka tour of India
                </MenuItem>
                <MenuItem href={`/category/india vs new zealand/`}>
                  New Zealand Tour of India
                </MenuItem>
              </SubMenu>
              <SubMenu label="Cricket Tournaments">
                <SubMenu label="Women&#8217;s Premier League">
                  <MenuItem href={`/category/delhi capital woman/`}>
                    Delhi Capital Woman
                  </MenuItem>
                  <MenuItem href={`/category/gujarat giants/`}>
                    Gujarat Giants
                  </MenuItem>
                  <MenuItem href={`/category/mumbai indians woman/`}>
                    Mumbai Indians Woman
                  </MenuItem>
                  <MenuItem href={`/category/up warriorz/`}>
                    UP Warriorz
                  </MenuItem>
                  <MenuItem
                    href={`/category/royal challengers bangalore woman/`}
                  >
                    Royal Challengers Bangalore Woman
                  </MenuItem>
                </SubMenu>
                <SubMenu label="PSL 2023">
                  <MenuItem href={`/category/karachi kings/`}>
                    Karachi Kings
                  </MenuItem>
                  <MenuItem href={`/category/islamabad united/`}>
                    Islamabad United
                  </MenuItem>
                  <MenuItem href={`/category/lahore qalandars/`}>
                    Lahore Qalandars
                  </MenuItem>
                  <MenuItem href={`/category/multan sultans/`}>
                    Multan Sultans
                  </MenuItem>
                  <MenuItem href={`/category/peshawar zalmi/`}>
                    Peshawar Zalmi
                  </MenuItem>
                  <MenuItem href={`/category/quetta gladiators/`}>
                    Quetta Gladiators
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Big Bash League">
                  <MenuItem href={`/category/adelaide strikers/`}>
                    Adelaide Strikers
                  </MenuItem>
                  <MenuItem href={`/category/brisbane heat/`}>
                    Brisbane Heat
                  </MenuItem>
                  <MenuItem href={`/category/hobart hurricanes/`}>
                    Hobart Hurricanes
                  </MenuItem>
                  <MenuItem href={`/category/sydney thunder/`}>
                    Sydney Thunder
                  </MenuItem>
                  <MenuItem href={`/category/sydney sixers/`}>
                    Sydney Sixers
                  </MenuItem>
                  <MenuItem href={`/category/melbourne stars/`}>
                    Melbourne Stars
                  </MenuItem>
                  <MenuItem href={`/category/melbourne renegades/`}>
                    Melbourne Renegades
                  </MenuItem>
                  <MenuItem href={`/category/perth scorchers/`}>
                    Perth Scorchers
                  </MenuItem>
                </SubMenu>
                <SubMenu label="BPL 2023">
                  <MenuItem href={`/category/rajshahi royals/`}>
                    Rajshahi Royals
                  </MenuItem>
                  <MenuItem href={`/category/sylhet thunder/`}>
                    Sylhet Thunder
                  </MenuItem>
                  <MenuItem href={`/category/chattogram challengers/`}>
                    Chattogram Challengers
                  </MenuItem>
                  <MenuItem href={`/category/cumilla warriors/`}>
                    Cumilla Warriors
                  </MenuItem>
                  <MenuItem href={`/category/dhaka platoon/`}>
                    Dhaka Platoon
                  </MenuItem>
                  <MenuItem href={`/category/khulna tigers/`}>
                    Khulna Tigers
                  </MenuItem>
                </SubMenu>
                <MenuItem href={`/category/international league t20/`}>
                  International League T20 2023
                </MenuItem>
                <MenuItem href={`/category/t20 blast 2022/`}>
                  T20 BLAST 2023
                </MenuItem>
                <MenuItem href={`/category/abu dhabi t10/`}>
                  Abu Dhabi T10 2023
                </MenuItem>
                <MenuItem href={`/category/lanka premier league/`}>
                  Lanka Premier League 2022
                </MenuItem>
              </SubMenu>
            </SubMenu>

            <SubMenu label="Other Sports">
              <MenuItem href={`/category/wwe`}>WWE</MenuItem>
              <MenuItem href={`/category/anime`}>Anime</MenuItem>
              <MenuItem href={`/category/ufc`}>UFC</MenuItem>
              <MenuItem href={`/category/tennis`}>Tennis</MenuItem>
              <MenuItem href={`/category/boxing`}>Boxing</MenuItem>
              <SubMenu label="E-Sports">
                <MenuItem href={`/category/battle grounds/`}>
                  Battle Grounds
                </MenuItem>
                <MenuItem href={`/category/cs go/`}>CS GO</MenuItem>
                <MenuItem href={`/category/call of duty/`}>
                  Call of Duty
                </MenuItem>
                <MenuItem href={`/category/fifa/`}>FIFA</MenuItem>
                <MenuItem href={`/category/gta/`}>GTA</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem href={`https://www.johnnybet.com/`}>JOHNNYBET</MenuItem>

            <SubMenu label="More">
              <SubMenu label="Fan Zone">
                <MenuItem href={`/category/polls`}>Polls</MenuItem>
                <MenuItem href={`/category/quiz`}>Quiz</MenuItem>
              </SubMenu>
              <MenuItem href={`/category/guest writer`}>Guest Writers</MenuItem>
              <MenuItem href={`https://the12thman.in/join-us-2/`}>
                join Us
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
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
