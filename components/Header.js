import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Adsense from './Adsense';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Header = ({}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  const openSearchBar = () => {
    setShowSearch(!showSearch);
  };

  const openSideBar = () => {
    setShowSideBar(!showSideBar);
  };

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
              <nav className="list-group list-group-flush">
                <ul className="navbar-nav " style={{ 'margin-left': '294px' }}>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark"
                      href="/category/nba"
                      data-toggle="dropdown"
                    >
                      {' '}
                      NBA
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Eastern Conference{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href="/category/miami heat/"
                            >
                              Miami Heat
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/category/washington wizards/"
                            >
                              Washington Wizard
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Western Conference{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/los angeles clippers/`}
                            >
                              Los Angeles Clippers
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/utah jazz/`}
                            >
                              Utah Jazz
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/phoenix suns/`}
                            >
                              Phoenix Suns
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/denver nuggets/`}
                            >
                              Denver Nuggets
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/dallas mavericks/`}
                            >
                              Dallas Mavericks
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/portland trail blazers/`}
                            >
                              Portland Trail Blazers
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/los angeles lakers/`}
                            >
                              Los Angeles Lakers
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/memphis grizzlies/`}
                            >
                              Memphis Grizzlies
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/golden state warriors/`}
                            >
                              Golden State Warriors
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/san antonio spurs/`}
                            >
                              San Antonio Spurs
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/new orleans pelicans/`}
                            >
                              New Orleans Pelicans
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/sacramento kings/`}
                            >
                              Sacramento Kings
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/oklahoma city thunder/`}
                            >
                              Oklahoma City Thunder
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/houston rockets/`}
                            >
                              Houston Rockets
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark"
                      href="/category/nba"
                      data-toggle="dropdown"
                    >
                      {' '}
                      Motor Sports
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a
                          className="dropdown-item"
                          href={`/category/formula 1`}
                        >
                          F1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={`/category/moto gp`}>
                          Moto GP
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link  text-dark" href="/category/nfl">
                      {' '}
                      NFL{' '}
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark"
                      href="/category/football"
                      data-toggle="dropdown"
                    >
                      {' '}
                      Football
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Domestic Leagues{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item icon-arrow  text-dark"
                              href="/category/English Premier League/"
                            >
                              English Premier League
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/arsenal/`}
                                >
                                  Arsenal
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/chelsea/`}
                                >
                                  Chelsea
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/everton/`}
                                >
                                  Everton
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/leicester city/`}
                                >
                                  Leicester City
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/liverpool/`}
                                >
                                  Liverpool
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/manchester city/`}
                                >
                                  Manchester City
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/manchester united/`}
                                >
                                  Manchester United
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/newcastle united/`}
                                >
                                  Newcastle United
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/tottenham hotspur/`}
                                >
                                  Tottenham Hotspur
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/west ham united/`}
                                >
                                  West Ham United
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              className="dropdown-item icon-arrow  text-dark"
                              href="/category/La Liga/"
                            >
                              La Liga
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/atletic bilbao/`}
                                >
                                  Atletic Bilbao
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/atletico madrid/`}
                                >
                                  Atletico Madrid
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/barcelona/`}
                                >
                                  Barcelona
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/real betis/`}
                                >
                                  Real Betis
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/real madrid/`}
                                >
                                  Real Madrid
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/real sociedad/`}
                                >
                                  Real Sociedad
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/Sevilla`}
                                >
                                  Sevilla
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/Valencia`}
                                >
                                  Valencia
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/Villarreal`}
                                >
                                  Villarreal
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              className="dropdown-item icon-arrow  text-dark"
                              href="/category/Bundesliga/"
                            >
                              Bundesliga
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/bayer leverkusen/`}
                                >
                                  Bayer Leverkusen
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/bayern munich/`}
                                >
                                  Bayern Munich
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/borussia dortmund/`}
                                >
                                  Borussia Dortmund
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/borussia monchengladbach/`}
                                >
                                  Borussia Monchengladbach
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/eintracht frankfurt/`}
                                >
                                  Eintracht Frankfurt
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/rb leipzig/`}
                                >
                                  RB Leipzig
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              className="dropdown-item icon-arrow  text-dark"
                              href="/category/Serie A/"
                            >
                              Serie A
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/ac milan/`}
                                >
                                  AC Milan
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/inter milan/`}
                                >
                                  Inter Milan
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/juventus/`}
                                >
                                  Juventus
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/ss lazio/`}
                                >
                                  Lazio
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/napoli/`}
                                >
                                  Napoli
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/as roma`}
                                >
                                  Roma
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              className="dropdown-item icon-arrow  text-dark"
                              href="/category/Ligue 1/"
                            >
                              Ligue 1
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/lyon`}
                                >
                                  Lyon
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/Marseille`}
                                >
                                  Marseille
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/Monaco FC`}
                                >
                                  Monaco FC
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/paris saint germain/`}
                                >
                                  PSG
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/category/MLS/">
                              MLS
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/category/Indian Super League/"
                            >
                              Indian Super League
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Domestic League Cups{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/league cup/`}
                            >
                              EFL Cup
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/fa cup`}
                            >
                              FA Cup
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/copa del ray/`}
                            >
                              Copa Del Ray
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/uefa champions league/`}
                            >
                              UEFA Champions League
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/europa league/`}
                            >
                              UEFA Europa League
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/uefa conference league/`}
                            >
                              UEFA Conference League
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark"
                      href="/category/cricket"
                      data-toggle="dropdown"
                    >
                      {' '}
                      Cricket
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Cricket Teams{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/australia cricket team`}
                            >
                              Australia Cricket Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/bangladesh cricket team`}
                            >
                              Bangladesh Cricket Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/england cricket team`}
                            >
                              England Cricket Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/indian cricket team`}
                            >
                              Indian Cricket Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/new zealand cricket team`}
                            >
                              New Zealand Cricket Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/pakistan cricket team/`}
                            >
                              Pakistan Cricket Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/south africa cricket team/`}
                            >
                              South Africa Cricket Team
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Cricket Series{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/india vs bangladesh/`}
                            >
                              India vs Bangladesh
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/australia vs south africa/`}
                            >
                              South Africa tour of Australia
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/pakistan vs new zealand/`}
                            >
                              Pakistan vs New Zealand
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/india vs sri lanka/`}
                            >
                              Sri Lanka tour of India
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/india vs new zealand/`}
                            >
                              New Zealand Tour of India
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item icon-arrow  text-dark"
                          href="#"
                        >
                          {' '}
                          Cricket Tournaments{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a
                              className="dropdown-item icon-arrow  text-dark"
                              href="#"
                            >
                              {' '}
                              Women&#8217;s Premier League{' '}
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/delhi capital woman/`}
                                >
                                  Delhi Capital Woman
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/gujarat giants/`}
                                >
                                  Gujarat Giants
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/mumbai indians woman/`}
                                >
                                  Mumbai Indians Woman
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/up warriorz/`}
                                >
                                  UP Warriorz
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/category/royal challengers bangalore woman/`}
                                >
                                  Royal Challengers Bangalore Woman
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item icon-arrow " href="#">
                              {' '}
                              PSL 2023{' '}
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/karachi kings/`}
                                >
                                  Karachi Kings
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/islamabad united/`}
                                >
                                  Islamabad United
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/lahore qalandars/`}
                                >
                                  Lahore Qalandars
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/multan sultans/`}
                                >
                                  Multan Sultans
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/peshawar zalmi/`}
                                >
                                  Peshawar Zalmi
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/quetta gladiators/`}
                                >
                                  Quetta Gladiators
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item icon-arrow " href="#">
                              {' '}
                              Big Bash League{' '}
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/adelaide strikers/`}
                                >
                                  Adelaide Strikers
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/brisbane heat/`}
                                >
                                  Brisbane Heat
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/hobart hurricanes/`}
                                >
                                  Hobart Hurricanes
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/sydney thunder/`}
                                >
                                  Sydney Thunder
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/sydney sixers/`}
                                >
                                  Sydney Sixers
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/melbourne stars/`}
                                >
                                  Melbourne Stars
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/melbourne renegades/`}
                                >
                                  Melbourne Renegades
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/perth scorchers/`}
                                >
                                  Perth Scorchers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item icon-arrow" href="#">
                              {' '}
                              BPL 2023{' '}
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/rajshahi royals/`}
                                >
                                  Rajshahi Royals
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/sylhet thunder/`}
                                >
                                  Sylhet Thunder
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/chattogram challengers/`}
                                >
                                  Chattogram Challengers
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/cumilla warriors/`}
                                >
                                  Cumilla Warriors
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/dhaka platoon/`}
                                >
                                  Dhaka Platoon
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item "
                                  href={`/category/khulna tigers/`}
                                >
                                  Khulna Tigers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/international league t20/`}
                            >
                              International League T20 2023
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/t20 blast 2022/`}
                            >
                              T20 BLAST 2023
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/abu dhabi t10/`}
                            >
                              Abu Dhabi T10 2023
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href={`/category/lanka premier league/`}
                            >
                              Lanka Premier League 2022
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark"
                      href="#"
                      data-toggle="dropdown"
                    >
                      {' '}
                      Other Sports
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a className="dropdown-item" href={`/category/wwe`}>
                          WWE
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={`/category/anime`}>
                          Anime
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={`/category/ufc`}>
                          UFC
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={`/category/tennis`}>
                          Tennis
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={`/category/boxing`}>
                          Boxing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link  text-dark"
                      href="https://www.johnnybet.com/"
                    >
                      {' '}
                      JOHNNYBET
                    </a>
                  </li>
                </ul>
              </nav>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="main_nav99"
              ></div>
            </div>
          </nav>
        </div>
        {/* <!-- End Navbar menu  --> */}

        {/* <!-- MOBILE sidebar menu  --> */}
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
      </header>
    </>
  );
};

export default Header;
