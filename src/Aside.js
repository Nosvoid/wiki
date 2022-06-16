import { useIntl } from 'react-intl';
import { FaBars } from 'react-icons/fa';
import { FaDiscord, FaHammer, FaCat, FaShopify, FaHotjar, FaHeart } from 'react-icons/fa';
import { FaPaw, FaUsers, FaHatWizard, FaGavel, FaTicketAlt, FaIdBadge, FaCheck } from 'react-icons/fa';
import React, { useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Colapsed from './Colapsed';
import Image from './Image';
import Darkmode from './Darkmode';
import Rules from './pages/Rules';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CustomFeatures from './pages/CustomFeatures';
import Accesory from './pages/Accesory';
import Act4 from './pages/Act4';
import Badge from './pages/Badge';
import Books from './pages/Books';
import Box from './pages/Box';
import C55 from './pages/C55';
import Equipment from './pages/Equipment';
import Faires from './pages/Faires';
import Fish from './pages/Fish';
import Perfection from './pages/Perfection';
import WhiteDLL from './pages/WhiteDLL';
import Prestige from './pages/Prestige';
import Prestige81 from './pages/Prestige81';
import Prestige81Books from './pages/Prestige81Books';
import Prestige81DailyQuests from './pages/Prestige81DailyQuests';
import Prestige81FamilyDungeon from './pages/Prestige81FamilyDungeon';
import prestige81FamilyTower from './pages/Prestige81FamilyTower';
import Prestige81LotteryRework from './pages/Prestige81LotteryRework';
import Prestige81Materials from './pages/Prestige81Materials';
import Prestige81MiniWB from './pages/Prestige81MiniWB';
import Prestige81NewItems from './pages/Prestige81NewItems';
import Prestige81NewJewel from './pages/Prestige81NewJewel';
import Prestige81Raids from './pages/Prestige81Raids';
import Prestige81WeaponSkin from './pages/Prestige81WeaponSkin';
import Resistance from './pages/Resistance';
import Rune from './pages/Rune';
import RunesToUse from './pages/RunesToUse';
import Server from './pages/Server';
import Shell from './pages/Shell';
import SP from './pages/SP';
import Tatto from './pages/Tatto';
import TattoToUse from './pages/TattoToUse';
import Wings from './pages/Wings';
import TeamMembers from './pages/TeamMembers';
import Schedule from './pages/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './pages/Content';
import Winter from './pages/Winter';
import Titles from './pages/Titles';
import Pets from './pages/Pets';
import PetsToUse from './pages/PetsToUse';
import Raids from './pages/Raids';
import Psp from './pages/Psp';
import PspToUse from './pages/PspToUse';
import Reputation from './pages/Reputation';
import { FiSettings } from "react-icons/fi";




import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaList, FaRegLaughWink } from 'react-icons/fa';
import sidebarBg from './assets/bg2.jpg';
import Shopupdate from './pages/Shopupdate';
import Wheel from './pages/Wheel';
import Costiumes from './pages/Costiumes';
import ContentCreator from './pages/ContentCreator';
import p8 from './pages/p8';
import Buff from './pages/BuffNPC';
import Betting from './pages/Betting';
import SpUpgrade from './pages/SpUpgrade';
import FishPrices from './pages/FishPrices';
import marathon from './pages/marathon';
import Exp from './pages/Exp';
import DB from './pages/DB';
import Rep from './pages/Rep';
import Gold from './pages/Gold';
import EvolutionEvent from './pages/EvolutionEvent';
import SummerEvent from './pages/SummerEvent';
import EasterEvent from './pages/EasterEvent';
import SpecialItem from './pages/SpecialItem';
import SellableItems from './pages/SellableItems';
import ValentineEvent from './pages/ValentineEvent';
import Damage from './pages/Damage';

const getValue = (valueName, defaultValue = null) => {
  return localStorage[valueName] ? localStorage[valueName] : defaultValue
}

const saveValue = (valueName, newValue) => {
  localStorage[valueName] = newValue;
}


const Aside = ({ setLocale }) => {

  const [rtl, setRtl] = useState(getValue("rtl", "false") === "true");
  const [collapsed, setCollapsed] = useState(getValue("collapsed", "false") === "true");
  const [image, setImage] = useState(getValue("image", "true") === "true");
  const [toggled, setToggled] = useState(getValue("toggled", "false") === "true");



  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
    saveValue("rtl", String(checked))
  };
  const handleImageChange = (checked) => {
    setImage(checked);
    saveValue("image", String(checked))
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
    saveValue("toggled", String(value))
  };

  const intl = useIntl();
  return (
    <div className={`app ${rtl ? 'active' : ''} ${toggled ? 'toggled' : ''}`}>

      <ProSidebar
        image={image ? sidebarBg : false}


        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}

      >
        <main className='main'>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
        </main>

        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {intl.formatMessage({ id: 'NosVoid Wiki' })}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">

            <MenuItem


              icon={<FaTachometerAlt />}


            >
              <a href='./'>

                {intl.formatMessage({ id: 'Void' })}
              </a>
            </MenuItem>


            <MenuItem icon={<FaRegFileAlt />}><a href='rules'>  {intl.formatMessage({ id: 'Rules' })}  </a></MenuItem>

            <MenuItem suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>} icon={<FaShopify />}><a href='shop'>  {intl.formatMessage({ id: 'Shop Update' })}  </a></MenuItem>

            <MenuItem icon={<FaYoutube />}><a href='contentcreator'>  {intl.formatMessage({ id: 'Content Creator' })}  </a></MenuItem>

            <MenuItem suffix={<span className="badge red">{intl.formatMessage({ id: 'How to fix' })}</span>} icon={<FaCheck />}><a href='whitedll'>  {intl.formatMessage({ id: 'Whitelist DLL' })}  </a></MenuItem>
          </Menu>


          <Menu iconShape="circle">


            <SubMenu
              suffix={<span className="badge yellow">Check!</span>}
              title={intl.formatMessage({ id: 'Important' })}
              icon={<FaRegLaughWink />}
            >
              <MenuItem ><a href='CustomFeatures'>{intl.formatMessage({ id: 'Features ⭐' })}</a> </MenuItem>
              <MenuItem> <a href='server'>{intl.formatMessage({ id: 'Server' })}</a> </MenuItem>
              <MenuItem> <a href='specialitem'>{intl.formatMessage({ id: 'Special Item' })}</a></MenuItem>
              <MenuItem><a href='schedule'>{intl.formatMessage({ id: 'Schedule' })}</a> </MenuItem>
            </SubMenu>

            <SubMenu
              suffix={<span className="badge yellow">2</span>}
              title={intl.formatMessage({ id: 'Crew' })}
              icon={<FaCat />}
            >
              <MenuItem> <a href='teammembers'>{intl.formatMessage({ id: 'Team Members' })} </a></MenuItem>
              <MenuItem><a href='contentCreators'>{intl.formatMessage({ id: 'Creators' })} </a></MenuItem>

            </SubMenu>
            <SubMenu
              suffix={<span className="badge red">0</span>}
              title={intl.formatMessage({ id: 'During Events' })}
              icon={<FaHeart />}
            >

              {/* 
                <MenuItem><a href='summer'>{intl.formatMessage({ id: 'Summer' })} </a></MenuItem>

                <MenuItem> <a href='valentine'>{intl.formatMessage({ id: 'Valentine' })} </a></MenuItem>
                <MenuItem><a href='evolution'>{intl.formatMessage({ id: 'Evolution' })} </a></MenuItem>
                <MenuItem><a href='easterevent'>{intl.formatMessage({ id: 'Easter Event' })} </a></MenuItem>
              */}

            </SubMenu>

            <SubMenu title={intl.formatMessage({ id: 'Guides' })} icon={<FaList />} suffix={<span className="badge yellow">43</span>}>

              <MenuItem suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='act4'>{intl.formatMessage({ id: 'Act4' })} </a></MenuItem>

              <MenuItem><a href='books'>{intl.formatMessage({ id: 'Books' })} </a> </MenuItem>
              <MenuItem><a href='buffnpc'>{intl.formatMessage({ id: 'Buff NPC' })} </a></MenuItem>

              <SubMenu suffix={<span className="badge yellow">6</span>} title={intl.formatMessage({ id: 'Equipment' })} icon={<FaHatWizard />}>
                <MenuItem><a href='accesory'>{intl.formatMessage({ id: 'Accesory' })} </a></MenuItem>
                <MenuItem><a href='badge'>{intl.formatMessage({ id: 'Badge' })} </a></MenuItem>
                <MenuItem><a href='c55'>{intl.formatMessage({ id: 'C55' })}  </a></MenuItem>
                <MenuItem><a href='costumes'>{intl.formatMessage({ id: 'Costumes' })} </a></MenuItem>
                <MenuItem><a href='Equipment'>{intl.formatMessage({ id: 'Equipment' })}</a> </MenuItem>
                <MenuItem><a href='faires'>{intl.formatMessage({ id: 'Faires' })}</a> </MenuItem>
              </SubMenu >

              <MenuItem><a href='fish'>{intl.formatMessage({ id: 'Fish' })} </a> </MenuItem>
              <MenuItem><a href='fishprices'>{intl.formatMessage({ id: 'Fish Prices' })} </a> </MenuItem>

              <SubMenu suffix={<span className="badge yellow">2</span>} title={intl.formatMessage({ id: 'Partners' })} icon={<FaUsers />}>
                <MenuItem ><a href='psp'>{intl.formatMessage({ id: 'Partner Cards' })} </a></MenuItem>
                <MenuItem ><a href='psptouse'>{intl.formatMessage({ id: 'What partner should i use?' })} </a></MenuItem>
              </SubMenu >

              <SubMenu suffix={<span className="badge yellow">2</span>} title={intl.formatMessage({ id: 'Pets' })} icon={<FaPaw />}>
                <MenuItem ><a href='pets'>{intl.formatMessage({ id: 'Pets' })} </a></MenuItem>
                <MenuItem ><a href='petstouse'>{intl.formatMessage({ id: 'What pet should I use?' })} </a></MenuItem>
              </SubMenu >

              <MenuItem><a href='prestige'>{intl.formatMessage({ id: 'Prestige' })}</a> </MenuItem>
              <MenuItem><a href='p8'>{intl.formatMessage({ id: 'Prestige 8' })} </a></MenuItem>
              <MenuItem><a href='prestige81'>{intl.formatMessage({ id: 'Prestige 8.1' })} </a></MenuItem>

              <SubMenu suffix={<span className="badge yellow">3</span>} title={intl.formatMessage({ id: 'Raids' })} icon={<FaTicketAlt />}>
                <MenuItem ><a href='raids'>{intl.formatMessage({ id: 'Raids' })} </a></MenuItem>
                <MenuItem><a href='box'>{intl.formatMessage({ id: 'Raid Boxes' })}  </a></MenuItem>
                <MenuItem><a href='marathon'>{intl.formatMessage({ id: 'Marathon' })} </a></MenuItem>
              </SubMenu >

              <MenuItem><a href='reputations'>{intl.formatMessage({ id: 'Reputation' })} </a> </MenuItem>
              <MenuItem><a href='resistance'>{intl.formatMessage({ id: 'Resistance' })} </a> </MenuItem>
              <MenuItem><a href='rules'>  {intl.formatMessage({ id: 'Rules' })}  </a></MenuItem>
              <MenuItem><a href='schedule'>{intl.formatMessage({ id: 'Schedule' })}</a> </MenuItem>
              <MenuItem> <a href='sellableitems'>{intl.formatMessage({ id: 'Sellable Items' })}</a></MenuItem>
              <MenuItem> <a href='server'>{intl.formatMessage({ id: 'Server' })}</a> </MenuItem>
              <MenuItem><a href='shell'>{intl.formatMessage({ id: 'Shell' })} </a> </MenuItem>

              <SubMenu suffix={<span className="badge yellow">3</span>} title={intl.formatMessage({ id: 'Specialist' })} icon={<FaIdBadge />}>
                <MenuItem><a href='sp'>{intl.formatMessage({ id: 'SP Cards' })}  </a></MenuItem>
                <MenuItem><a href='spupgrade'>{intl.formatMessage({ id: 'SP Upgrade' })}</a></MenuItem>
                <MenuItem><a href='perfection'>{intl.formatMessage({ id: 'Perfection' })}</a>  </MenuItem>
              </SubMenu >

              <SubMenu suffix={<span className="badge yellow">4</span>} title={intl.formatMessage({ id: 'Tattoo & Runes' })} icon={<FaGavel />}>
                <MenuItem><a href='tatto'>{intl.formatMessage({ id: 'Tattoos' })}</a> </MenuItem>
                <MenuItem><a href='tattotouse'>{intl.formatMessage({ id: 'What Tattoo should I use?' })}</a> </MenuItem>
                <MenuItem><a href='rune'>{intl.formatMessage({ id: 'Rune' })}</a> </MenuItem>
                <MenuItem><a href='runestouse'>{intl.formatMessage({ id: 'What Runes should I use?' })}</a> </MenuItem>
              </SubMenu >

              <MenuItem ><a href='titles'>{intl.formatMessage({ id: 'Titles' })} </a></MenuItem>

              <SubMenu suffix={<span className="badge red">6</span>} title={intl.formatMessage({ id: 'Stuff Guides' })} icon={<FaHotjar />}>
                <MenuItem><a href='betting'>{intl.formatMessage({ id: 'Betting Stuff' })} </a></MenuItem>
                <MenuItem><a href='damage'>{intl.formatMessage({ id: 'Damage Stuff' })} </a></MenuItem>
                <MenuItem><a href='doublebox'>{intl.formatMessage({ id: 'Double box Stuff' })} </a></MenuItem>
                <MenuItem> <a href='exp'>{intl.formatMessage({ id: 'Exp Stuff' })} </a></MenuItem>
                <MenuItem> <a href='gold'>{intl.formatMessage({ id: 'Gold Stuff' })} </a></MenuItem>
                <MenuItem><a href='reputation'>{intl.formatMessage({ id: 'Reputation Stuff' })} </a></MenuItem>
              </SubMenu>

              <MenuItem  ><a href='wings'>{intl.formatMessage({ id: 'Wings' })} </a></MenuItem>

            </SubMenu>

            <SubMenu title={intl.formatMessage({ id: 'In work...' })} icon={<FaHammer />}
              suffix={<span className="badge yellow"></span>}
            >
            </SubMenu>

            <div className='mt-5'></div>

            <SubMenu title={intl.formatMessage({ id: 'Setting/Dark Mode' })} icon={<FiSettings />}
            >
              <MenuItem> <Colapsed
                image={image}
                toggled={toggled}
                collapsed={collapsed}
                rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleRtlChange={handleRtlChange}
                handleImageChange={handleImageChange}
              /> </MenuItem>
              <MenuItem><Image
                image={image}
                toggled={toggled}
                collapsed={collapsed}
                rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleRtlChange={handleRtlChange}
                handleImageChange={handleImageChange}
              /></MenuItem>
              <MenuItem><Darkmode
                image={image}
                toggled={toggled}
                collapsed={collapsed}
                rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleRtlChange={handleRtlChange}
                handleImageChange={handleImageChange}
              /></MenuItem>

            </SubMenu>
          </Menu>
        </SidebarContent>
        <div className='d-flex justify-content-center'>

        </div>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://discord.com/invite/qd2yrzg"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaDiscord />
              <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {intl.formatMessage({ id: 'Discord' })}
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>

      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <Router>
        <Switch>
          <Route path='/Rules' exact component={Rules} />
          <Route path='/' exact component={Home} />
          <Route path='/teammembers' component={TeamMembers} />
          <Route path='/whitedll' component={WhiteDLL} />
          <Route path='/contentCreators' exact component={Content} />
          <Route path='/customFeatures' component={CustomFeatures} />
          <Route path='/accesory' component={Accesory} />
          <Route path='/act4' component={Act4} />
          <Route path='/badge' component={Badge} />
          <Route path='/books' component={Books} />
          <Route path='/box' component={Box} />
          <Route path='/c55' component={C55} />
          <Route path='/equipment' component={Equipment} />
          <Route path='/faires' component={Faires} />
          <Route path='/fish' component={Fish} />
          <Route path='/perfection' component={Perfection} />
          <Route path='/prestige' component={Prestige} />
          <Route path='/prestige81' component={Prestige81} />
          <Route path='/prestige81Books' component={Prestige81Books} />
          <Route path='/prestige81DailyQuests' component={Prestige81DailyQuests} />
          <Route path='/prestige81FamilyDungeon' component={Prestige81FamilyDungeon} />
          <Route path='/prestige81FamilyTower' component={prestige81FamilyTower} />
          <Route path='/prestige81LotteryRework' component={Prestige81LotteryRework} />
          <Route path='/prestige81Materials' component={Prestige81Materials} />
          <Route path='/prestige81MiniWB' component={Prestige81MiniWB} />
          <Route path='/prestige81NewItems' component={Prestige81NewItems} />
          <Route path='/prestige81NewJewel' component={Prestige81NewJewel} />
          <Route path='/prestige81Raids' component={Prestige81Raids} />
          <Route path='/prestige81WeaponSkin' component={Prestige81WeaponSkin} />
          <Route path='/resistance' component={Resistance} />
          <Route path='/rune' component={Rune} />
          <Route path='/runestouse' component={RunesToUse} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/server' component={Server} />
          <Route path='/shell' component={Shell} />
          <Route path='/sp' component={SP} />
          <Route path='/tatto' component={Tatto} />
          <Route path='/tattotouse' component={TattoToUse} />
          <Route path='/titles' component={Titles} />
          <Route path='/wings' component={Wings} />
          <Route path='/winter' component={Winter} />
          <Route path='/pets' component={Pets} />
          <Route path='/petstouse' component={PetsToUse} />
          <Route path='/psp' component={Psp} />
          <Route path='/psptouse' component={PspToUse} />
          <Route path='/reputations' component={Reputation} />
          <Route path='/shop' component={Shopupdate} />
          <Route path='/wheel' component={Wheel} />
          <Route path='/raids' component={Raids} />
          <Route path='/costumes' component={Costiumes} />
          <Route path='/p8' component={p8} />
          <Route path='/buffnpc' component={Buff} />
          <Route path='/betting' component={Betting} />
          <Route path='/spupgrade' component={SpUpgrade} />
          <Route path='/fishprices' component={FishPrices} />
          <Route path='/marathon' component={marathon} />
          <Route path='/contentcreator' component={ContentCreator} />
          <Route path='/exp' component={Exp} />
          <Route path='/doublebox' component={DB} />
          <Route path='/reputation' component={Rep} />
          <Route path='/gold' component={Gold} />
          <Route path='/evolution' component={EvolutionEvent} />
          <Route path='/summer' component={SummerEvent} />
          <Route path='/easterevent' component={EasterEvent} />
          <Route path='/specialitem' component={SpecialItem} />
          <Route path='/sellableitems' component={SellableItems} />
          <Route path='/valentine' component={ValentineEvent} />
          <Route path='/damage' component={Damage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Aside;

