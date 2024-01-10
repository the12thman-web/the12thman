import Logo from '@components/Logo';
import menu from '@config/menu.json';
import socical from '@config/social.json';
import useWindow from '@hooks/useWindow';
import Social from '@layouts/components/Social';
import dynamic from 'next/dynamic';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, Fragment } from 'react';

const MobileMenuSideBar = dynamic(() => import('./MobileMenuSidebar'));

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;
  const isMobile = useWindow(767) < 768

  // states declaration

  const [showMenu, setShowMenu] = useState(false);

  // Router
  const router = useRouter();

  //stop scrolling when nav is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [showMenu]);

  return (
    <header className="top-0 z-50 border-b bg-body pb-[12px] pt-[23px] dark:border-darkmode-border dark:bg-darkmode-body lg:py-[33px]">
      <nav className="container relative flex flex-wrap items-center justify-between px-1 sm:px-7">
        <button onClick={() => setShowMenu(!showMenu)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden">
          {showMenu ? (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" />
            </svg>
          ) : (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        <div className="order-0">
          <Logo />
        </div>
        <div className="flex items-center space-x-4 xl:space-x-8">
          <div className={`collapse-menu translate-x-full lg:flex lg:translate-x-0`}>
            <button className="absolute right-6 top-11 lg:hidden" onClick={() => setShowMenu(false)}>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" />
              </svg>
            </button>
            {isMobile ? null : <ul id="nav-menu" className="navbar-nav ml-0 w-full group-hover:scale-100 md:w-auto md:space-x-1 lg:flex xl:space-x-2">
              {main.map((menu, i) => (
                <Fragment key={`menu-${i}`}>
                  {menu.hasChildren ? (
                    <li className="nav-item nav-dropdown group relative">
                      <Link href={menu.url} className={`nav-link ${menu.children.map(c => c.url).includes(router.asPath) && 'active'} inline-flex items-center`}>
                        {menu.name}
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </Link>
                      <ul className="nav-dropdown-list hidden transition-all duration-300 group-hover:top-[46px] group-hover:block md:invisible md:absolute md:top-[60px] md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                        <div className="nav-bar-dropdown-list">
                          {menu.hasChildren &&
                            menu.children &&
                            menu.children.map((child, i) => (
                              <li className="nav-dropdown-item relative" key={`children-${i}`}>
                                <Link href={child.url} className={`nav-dropdown-link block ${router.asPath === child.url && 'active'}`}>
                                  {child.name}
                                </Link>
                                {child.hasChildren && <InnerLevelMenu parentArray={child} router={router}></InnerLevelMenu>}
                              </li>
                            ))}
                        </div>
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link href={menu.url} className={`nav-link block ${router.asPath.includes(menu.url) && 'active'}`}>
                        {menu.name}
                      </Link>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>}
            {/* header social */}
            <Social source={socical} className="socials" />
          </div>
        </div>
      </nav>

      
      {/* <!-- MOBILE sidebar menu  --> */}
      <div className="lg:hidden">
        {showMenu ? <MobileMenuSideBar showMenu={showMenu}></MobileMenuSideBar> : null}
      </div>
    </header>
  );
};

const InnerLevelMenu = ({ parentArray, router }) => {
  return (
    <ul className="nav-dropdown-list relative hidden transition-all duration-300 group-hover:left-[150px] group-hover:block md:invisible md:absolute md:top-[40px] md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
      {parentArray.children.map((lastChild, i) => (
        <li className="nav-dropdown-item" key={`children-${i}`}>
          <Link href={lastChild.url} className={`nav-dropdown-link block ${router.asPath === lastChild.url && 'active'}`}>
            {lastChild.name}
          </Link>
          {lastChild.hasChildren && <InnerLevelMenu parentArray={lastChild} router={router}></InnerLevelMenu>}
        </li>
      ))}
    </ul>
  );
};

export default Header;
