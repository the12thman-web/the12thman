import React from 'react';
import { Menu, Sidebar, SubMenu, MenuItem } from 'react-pro-sidebar';

export const MobileMenuSideBar = ({ showMenu }) => {
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
        {/* <SubMenu label="IPL 2023">
          <SubMenu label="IPL Teams">
            <MenuItem href={`/category/${('chennai super kings').replace(" ", "-")}/`}>
              Chennai Super Kings &#8211; CSK
            </MenuItem>
            <MenuItem href={`/category/${('delhi capitals').replace(" ", "-")}/`}>
              Delhi Capitals &#8211; DC
            </MenuItem>
            <MenuItem href={`/category/${('gujarat titans').replace(" ", "-")}/`}>
              Gujarat Titans &#8211; GT
            </MenuItem>
            <MenuItem href={`/category/kolkata-knight-riders/`}>
              Kolkata knight Riders &#8211; KKR
            </MenuItem>
            <MenuItem href={`/category/lucknow-super-giants/`}>
              Lucknow Super Giants -LSG
            </MenuItem>
            <MenuItem href={`/category/mumbai-indians/`}>
              Mumbai Indians -MI
            </MenuItem>
            <MenuItem href={`/category/punjab-kings/`}>
              Punjab Kings -PKBS
            </MenuItem>
            <MenuItem href={`/category/rajasthan-royals/`}>
              Rajasthan Royals &#8211; RR
            </MenuItem>
            <MenuItem href={`/category/royal-challengers-bangalore/`}>
              Royal Challengers Bangalore RCB
            </MenuItem>
            <MenuItem href={`/category/sunrisers-hyderabad/`}>
              Sunrisers Hyderabad -SRH
            </MenuItem>
          </SubMenu>
        </SubMenu> */}
        <SubMenu label="NBA">
          <SubMenu label="Eastern Conference">
            <MenuItem href="/category/sports/nba/eastern-conference/miami-heat">
              Miami Heat
            </MenuItem>
            <MenuItem href="/category/sports/nba/eastern-conference/washington-wizards">
              Washington Wizards
            </MenuItem>
          </SubMenu>
          <SubMenu label="Western Conference">
            <MenuItem href="/category/sports/nba/western-conference/los-angeles-clippers">
              Los Angeles Clippers
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/utah-jazz">
              Utah Jazz
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/phoenix-suns">
              Phoenix Suns
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/denver-nuggets">
              Denver Nuggets
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/dallas-mavericks">
              Dallas Mavericks
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/portland-trail-blazers">
              Portland Trail Blazers
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/los-angeles-lakers">
              Los Angeles Lakers
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/memphis-grizzlies">
              Memphis Grizzlies
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/golden-state-warriors">
              Golden State Warriors
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/san-antonio-spurs">
              San Antonio Spurs
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/new-orleans-pelicans">
              New Orleans Pelicans
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/sacramento-kings">
              Sacramento Kings
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/oklahoma-city-thunder">
              Oklahoma City Thunder
            </MenuItem>
            <MenuItem href="/category/sports/nba/western-conference/houston-rockets">
              Houston Rockets
            </MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label="Motor Sports">
          <MenuItem href={`/category/sports/motor-sports/formula-1`}>
            F1
          </MenuItem>
          <MenuItem href={`/category/sports/motor-sports/moto-gp`}>
            Moto GP
          </MenuItem>
        </SubMenu>
        <MenuItem href={`/category/sports/nfl/`}>NFL</MenuItem>
        <SubMenu label="Football">
          <SubMenu label="Domestic Leagues">
            <SubMenu label="English Premier League">
              <MenuItem
                href={`/category/football/english-premier-league/arsenal/`}
              >
                Arsenal
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/chelsea/`}
              >
                Chelsea
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/everton/`}
              >
                Everton
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/leicester-city/`}
              >
                Leicester City
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/liverpool/`}
              >
                Liverpool
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/manchester-city/`}
              >
                Manchester City
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/manchester-united/`}
              >
                Manchester United
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/newcastle-united/`}
              >
                Newcastle United
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/tottenham-hotspur/`}
              >
                Tottenham Hotspur
              </MenuItem>
              <MenuItem
                href={`/category/football/english-premier-league/west-ham-united/`}
              >
                West Ham United
              </MenuItem>
            </SubMenu>
            <SubMenu label="La Liga">
              <MenuItem href={`/category/football/la-liga/atletic-bilbao/`}>
                Atletic Bilbao
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/atletico-madrid/`}>
                Atletico Madrid
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/barcelona/`}>
                Barcelona
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/real-betis/`}>
                Real Betis
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/real-madrid/`}>
                Real Madrid
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/real-sociedad/`}>
                Real Sociedad
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/Sevilla`}>
                Sevilla
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/Valencia`}>
                Valencia
              </MenuItem>
              <MenuItem href={`/category/football/la-liga/Villarreal`}>
                Villarreal
              </MenuItem>
            </SubMenu>
            <SubMenu label="Bundesliga">
              <MenuItem
                href={`/category/football/bundesliga/bayer-leverkusen/`}
              >
                Bayer Leverkusen
              </MenuItem>
              <MenuItem href={`/category/football/bundesliga/bayern-munich/`}>
                Bayern Munich
              </MenuItem>
              <MenuItem
                href={`/category/football/bundesliga/borussia-dortmund/`}
              >
                Borussia Dortmund
              </MenuItem>
              <MenuItem
                href={`/category/football/bundesliga/borussia-monchengladbach/`}
              >
                Borussia Monchengladbach
              </MenuItem>
              <MenuItem
                href={`/category/football/bundesliga/eintracht-frankfurt/`}
              >
                Eintracht Frankfurt
              </MenuItem>
              <MenuItem href={`/category/football/bundesliga/rb-leipzig/`}>
                RB Leipzig
              </MenuItem>
            </SubMenu>
            <SubMenu label="Serie A">
              <MenuItem href={`/category/football/serie-a/ac-milan/`}>
                AC Milan
              </MenuItem>
              <MenuItem href={`/category/football/serie-a/inter-milan/`}>
                Inter Milan
              </MenuItem>
              <MenuItem href={`/category/football/serie-a/juventus/`}>
                Juventus
              </MenuItem>
              <MenuItem href={`/category/football/serie-a/ss-lazio/`}>
                Lazio
              </MenuItem>
              <MenuItem href={`/category/football/serie-a/napoli/`}>
                Napoli
              </MenuItem>
              <MenuItem href={`/category/football/serie-a/as-roma`}>
                Roma
              </MenuItem>
            </SubMenu>
            <SubMenu label="Ligue 1">
              <MenuItem href={`/category/football/ligue-1/lyon`}>Lyon</MenuItem>
              <MenuItem href={`/category/football/ligue-1/Marseille`}>
                Marseille
              </MenuItem>
              <MenuItem href={`/category/football/ligue-1/Monaco-FC`}>
                Monaco FC
              </MenuItem>
              <MenuItem
                href={`/category/football/ligue-1/paris-saint-germain/`}
              >
                PSG
              </MenuItem>
            </SubMenu>
            <MenuItem href={`/category/football/mls`}>MLS</MenuItem>
            <MenuItem href={`/category/football/Indian-Super-League`}>
              Indian Super League
            </MenuItem>
          </SubMenu>
          <SubMenu label="Domestic League Cups">
            <MenuItem href={`/category/league-cup/`}>EFL Cup</MenuItem>
            <MenuItem href={`/category/football/domestic-cups/fa-cup`}>
              FA Cup
            </MenuItem>
            <MenuItem href={`/category/football/domestic-cups/copa-del-ray/`}>
              Copa Del Ray
            </MenuItem>
            <SubMenu label="UEFA">
              <MenuItem href={`/category/football/uefa/uefa-champions-league/`}>
                UEFA Champions League
              </MenuItem>
              <MenuItem href={`/category/football/uefa/europa-league/`}>
                UEFA Europa League
              </MenuItem>
              <MenuItem
                href={`/category/football/uefa/uefa-conference-league/`}
              >
                UEFA Conference League
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem href={`/category/football/fantasy-football/`}>
            Fantasy Football
          </MenuItem>
        </SubMenu>

        <SubMenu label="Cricket">
          <SubMenu label="Cricket Teams">
            <MenuItem
              href={`/category/cricket/cricket-teams/australia-cricket-team`}
            >
              Australia Cricket Team
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-teams/bangladesh-cricket-team`}
            >
              Bangladesh Cricket Team
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-teams/england-cricket-team`}
            >
              England Cricket Team
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-teams/indian-cricket-team`}
            >
              Indian Cricket Team
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-teams/new-zealand-cricket-team`}
            >
              New Zealand Cricket Team
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-teams/pakistan-cricket-team/`}
            >
              Pakistan Cricket Team
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-teams/south-africa-cricket-team/`}
            >
              South Africa Cricket Team
            </MenuItem>
          </SubMenu>
          <SubMenu label="Cricket Series">
            <MenuItem
              href={`/category/cricket/cricket-series/india-vs-bangladesh/`}
            >
              India vs Bangladesh
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-series/australia-vs-south-africa/`}
            >
              South Africa tour of Australia
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-series/pakistan-vs-new-zealand/`}
            >
              Pakistan vs New Zealand
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-series/india-vs-sri-lanka/`}
            >
              Sri Lanka tour of India
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-series/india-vs-new-zealand/`}
            >
              New Zealand Tour of India
            </MenuItem>
          </SubMenu>
          <SubMenu label="Cricket Tournaments">
            <SubMenu label="Women&#8217;s Premier League">
              <MenuItem
                href={`/category/cricket/cricket-tournaments/wpl/delhi-capital-woman/`}
              >
                Delhi Capital Woman
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/wpl/gujarat-giants/`}
              >
                Gujarat Giants
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/wpl/mumbai-indians-woman/`}
              >
                Mumbai Indians Woman
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/wpl/up-warriorz/`}
              >
                UP Warriorz
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/wpl/royal-challengers-bangalore-woman/`}
              >
                Royal Challengers Bangalore Woman
              </MenuItem>
            </SubMenu>
            <SubMenu label="PSL 2023">
              <MenuItem
                href={`/category/cricket/cricket-tournaments/psl/karachi-kings/`}
              >
                Karachi Kings
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/psl/islamabad-united/`}
              >
                Islamabad United
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/psl/lahore-qalandars/`}
              >
                Lahore Qalandars
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/psl/multan-sultans/`}
              >
                Multan Sultans
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/psl/peshawar-zalmi/`}
              >
                Peshawar Zalmi
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/psl/quetta-gladiators/`}
              >
                Quetta Gladiators
              </MenuItem>
            </SubMenu>
            <SubMenu label="Big Bash League">
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/adelaide-strikers/`}
              >
                Adelaide Strikers
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/brisbane-heat/`}
              >
                Brisbane Heat
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/hobart-hurricanes/`}
              >
                Hobart Hurricanes
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/sydney-thunder/`}
              >
                Sydney Thunder
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/sydney-sixers/`}
              >
                Sydney Sixers
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/melbourne-stars/`}
              >
                Melbourne Stars
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/melbourne-renegades/`}
              >
                Melbourne Renegades
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/big-bash-league/perth-scorchers/`}
              >
                Perth Scorchers
              </MenuItem>
            </SubMenu>
            <SubMenu label="BPL 2023">
              <MenuItem
                href={`/category/cricket/cricket-tournaments/bangladesh-premier-league/rajshahi-royals/`}
              >
                Rajshahi Royals
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/bangladesh-premier-league/sylhet-thunder/`}
              >
                Sylhet Thunder
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/bangladesh-premier-league/chattogram-challengers/`}
              >
                Chattogram Challengers
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/bangladesh-premier-league/cumilla-warriors/`}
              >
                Cumilla Warriors
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/bangladesh-premier-league/dhaka-platoon/`}
              >
                Dhaka Platoon
              </MenuItem>
              <MenuItem
                href={`/category/cricket/cricket-tournaments/bangladesh-premier-league/khulna-tigers/`}
              >
                Khulna Tigers
              </MenuItem>
            </SubMenu>
            <MenuItem
              href={`/category/cricket/cricket-tournaments/international-league-t20/`}
            >
              International League T20 2023
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-tournaments/t20-blast-2022/`}
            >
              T20 BLAST 2023
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-tournaments/abu-dhabi-t10/`}
            >
              Abu Dhabi T10 2023
            </MenuItem>
            <MenuItem
              href={`/category/cricket/cricket-tournaments/lanka-premier-league/`}
            >
              Lanka Premier League 2022
            </MenuItem>
          </SubMenu>
        </SubMenu>

        <SubMenu label="Other Sports">
          <MenuItem href={`/category/sports/wwe`}>WWE</MenuItem>
          <MenuItem href={`/category/anime`}>Anime</MenuItem>
          <MenuItem href={`/category/sports/ufc`}>UFC</MenuItem>
          <MenuItem href={`/category/sports/tennis`}>Tennis</MenuItem>
          <MenuItem href={`/category/sports/boxing`}>Boxing</MenuItem>
          <SubMenu label="E-Sports">
            <MenuItem href={`/category/sports/e-sports/battle-grounds/`}>
              Battle Grounds
            </MenuItem>
            <MenuItem href={`/category/sports/e-sports/cs-go/`}>CS GO</MenuItem>
            <MenuItem href={`/category/sports/e-sports/call-of-duty/`}>
              Call of Duty
            </MenuItem>
            <MenuItem href={`/category/sports/e-sports/fifa/`}>FIFA</MenuItem>
            <MenuItem href={`/category/sports/e-sports/gta/`}>GTA</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem href={`https://www.johnnybet.com/`}>JOHNNYBET</MenuItem>

        <SubMenu label="More">
          <SubMenu label="Fan Zone">
            <MenuItem href={`/category/polls`}>Polls</MenuItem>
            <MenuItem href={`/category/quiz`}>Quiz</MenuItem>
          </SubMenu>
          <MenuItem href={`/category/guest-writer`}>Guest Writers</MenuItem>
          <MenuItem href={`https://the12thman.in/join-us-2/`}>join Us</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};
