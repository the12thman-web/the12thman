
import React from 'react';
import { Menu, Sidebar, SubMenu, MenuItem } from 'react-pro-sidebar';

export const MobileMenuSideBar = ({showMenu}) => {
  return (
    <Sidebar
      defaultCollapsed={showMenu}
      collapsedWidth="0"
      style={{
        backgroundColor: 'rgb(249 249 249)',
        position: 'absolute',
        zIndex: '100',
      }}
      backgroundColor="#fffff"
      collapsed={!showMenu}
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
            <MenuItem href={`/category/phoenix suns/`}>Phoenix Suns</MenuItem>
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
              <MenuItem href={`/category/real madrid/`}>Real Madrid</MenuItem>
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
              <MenuItem href={`/category/inter milan/`}>Inter Milan</MenuItem>
              <MenuItem href={`/category/juventus/`}>Juventus</MenuItem>
              <MenuItem href={`/category/ss lazio/`}>Lazio</MenuItem>
              <MenuItem href={`/category/napoli/`}>Napoli</MenuItem>
              <MenuItem href={`/category/as roma`}>Roma</MenuItem>
            </SubMenu>
            <SubMenu label="Ligue 1">
              <MenuItem href={`/category/lyon`}>Lyon</MenuItem>
              <MenuItem href={`/category/Marseille`}>Marseille</MenuItem>
              <MenuItem href={`/category/Monaco FC`}>Monaco FC</MenuItem>
              <MenuItem href={`/category/paris saint germain/`}>PSG</MenuItem>
            </SubMenu>
            <MenuItem href={`/category/mls`}>MLS</MenuItem>
            <MenuItem href={`/category/Indian Super League`}>
              Indian Super League
            </MenuItem>
          </SubMenu>
          <SubMenu label="Domestic League Cups">
            <MenuItem href={`/category/league cup/`}>EFL Cup</MenuItem>
            <MenuItem href={`/category/fa cup`}>FA Cup</MenuItem>
            <MenuItem href={`/category/copa del ray/`}>Copa Del Ray</MenuItem>
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
              <MenuItem href={`/category/up warriorz/`}>UP Warriorz</MenuItem>
              <MenuItem href={`/category/royal challengers bangalore woman/`}>
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
            <MenuItem href={`/category/call of duty/`}>Call of Duty</MenuItem>
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
          <MenuItem href={`https://the12thman.in/join-us-2/`}>join Us</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};
