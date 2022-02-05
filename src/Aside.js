import { useIntl } from 'react-intl';
import {  FaBars } from 'react-icons/fa';
import {  FaDiscord, FaHammer, FaCat, FaShopify } from 'react-icons/fa';
import React, { useState } from 'react';
import {  FaRegFileAlt } from 'react-icons/fa';

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
import C50 from './pages/C50';
import C55 from './pages/C55';
import Equipment from './pages/Equipment';
import Faires from './pages/Faires';
import Fish from './pages/Fish';
import Perfection from './pages/Perfection';
import Prestige from './pages/Prestige';
import Resistance from './pages/Resistance';
import Rune from './pages/Rune';
import Server from './pages/Server';
import Shell from './pages/Shell';
import SP from './pages/SP';
import Tatto from './pages/Tatto';
import Wings from './pages/Wings';
import TeamMembers from './pages/TeamMembers';
import Schedule from './pages/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './pages/Content';
import Winter from './pages/Winter';
import Titles from './pages/Titles';
import Pets from './pages/Pets';
import Raids from './pages/Raids';
import Psp from './pages/Psp';
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
import { FaTachometerAlt, FaGem, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg2.jpg';
import Shopupdate from './pages/Shopupdate';
import Wheel from './pages/Wheel';
import Costiumes from './pages/Costiumes';
import ContentCreator from './pages/ContentCreator';
import p8 from './pages/p8';
import marathon from './pages/marathon';




const Aside = ({setLocale}) => {

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  

 
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
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
            
            {intl.formatMessage({ id: 'dashboard' })}
            </a>
          </MenuItem>
          
          <MenuItem icon={<FaRegFileAlt />}><a href='rules'>  {intl.formatMessage({ id: 'Rules' })}  </a></MenuItem>
          
          <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}icon={<FaShopify />}><a href='shop'>  {intl.formatMessage({ id: 'Shop Update' })}  </a></MenuItem>
          
          <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}icon={<FaGem />}><a href='contentcreator'>  {intl.formatMessage({ id: 'Content Creator' })}  </a></MenuItem>
        </Menu>
       
        
        <Menu iconShape="circle">
          
          
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title={intl.formatMessage({ id: 'Important' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem> <a href='server'>{intl.formatMessage({ id: 'Server' })}</a> </MenuItem>
            <MenuItem><a href='schedule'>{intl.formatMessage({ id: 'Schedule' })}</a> </MenuItem>
          </SubMenu>
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'Recommended' })}
            icon={<FaHeart />}
          >
            <MenuItem  ><a href='CustomFeatures'>{intl.formatMessage({ id: 'Features ⭐' })}</a> </MenuItem>
           
            <MenuItem  ><a href='raids'>{intl.formatMessage({ id: 'Raids' })} </a></MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='p8'>{intl.formatMessage({ id: 'Prestige 8' })} </a></MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='marathon'>{intl.formatMessage({ id: 'Marathon' })} </a></MenuItem>
           
          </SubMenu>
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title={intl.formatMessage({ id: 'Crew' })}
            icon={<FaCat />}
          >
            <MenuItem> <a href='teammembers'>{intl.formatMessage({ id: 'Team Members' })} </a></MenuItem>
            <MenuItem><a href='contentCreators'>{intl.formatMessage({ id: 'Creators' })} </a></MenuItem>
           
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'Guides' })} icon={<FaList />}
             suffix={<span className="badge yellow">31</span>}>
          <MenuItem> <a href='server'>{intl.formatMessage({ id: 'Server' })}</a> </MenuItem>
     
          <MenuItem ><a href='raids'>{intl.formatMessage({ id: 'Raids' })} </a></MenuItem>
          <MenuItem><a href='rules'>  {intl.formatMessage({ id: 'Rules' })}  </a></MenuItem>
            <MenuItem> <a href='teammembers'>{intl.formatMessage({ id: 'Team Members' })} </a></MenuItem>
            <MenuItem><a href='schedule'>{intl.formatMessage({ id: 'Schedule' })}</a> </MenuItem>
          <MenuItem ><a href='CustomFeatures'>{intl.formatMessage({ id: 'Features ⭐' })}</a> </MenuItem>
            <MenuItem><a href='contentCreators'>{intl.formatMessage({ id: 'Creators' })} </a></MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='costumes'>{intl.formatMessage({ id: 'Costumes' })} </a></MenuItem>
            <MenuItem><a href='act4'>{intl.formatMessage({ id: 'Act4' })} </a> </MenuItem>
            <MenuItem><a href='books'>{intl.formatMessage({ id: 'Books' })} </a> </MenuItem>
            <MenuItem><a href='fish'>{intl.formatMessage({ id: 'Fish' })} </a> </MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='p8'>{intl.formatMessage({ id: 'Prestige 8' })} </a></MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='marathon'>{intl.formatMessage({ id: 'Marathon' })} </a></MenuItem>
            <MenuItem ><a href='pets'>{intl.formatMessage({ id: 'Mate' })} </a></MenuItem>
            <MenuItem><a href='box'>{intl.formatMessage({ id: 'Boxes' })}  </a></MenuItem>
            <MenuItem ><a href='titles'>{intl.formatMessage({ id: 'Titles' })} </a></MenuItem>
            <MenuItem ><a href='psp'>{intl.formatMessage({ id: 'Partner Cards' })} </a></MenuItem>
            <MenuItem><a href='perfection'>{intl.formatMessage({ id: 'Perfection' })}</a>  </MenuItem>
            <MenuItem><a href='prestige'>{intl.formatMessage({ id: 'Prestige' })}</a> </MenuItem>
            <MenuItem><a href='resistance'>{intl.formatMessage({ id: 'Resistance' })} </a> </MenuItem>
            <MenuItem><a href='shell'>{intl.formatMessage({ id: 'Shell' })} </a> </MenuItem>
            <MenuItem><a href='sp'>{intl.formatMessage({ id: 'SP' })}  </a></MenuItem>
            <MenuItem  ><a href='wings'>{intl.formatMessage({ id: 'Wings' })} </a></MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'Tattos/Runes' })} `}>
              <MenuItem><a href='rune'>{intl.formatMessage({ id: 'Rune' })}</a> </MenuItem>
              <MenuItem><a href='tatto'>{intl.formatMessage({ id: 'Tattos' })}</a> </MenuItem>
              </SubMenu>
            <SubMenu title={`${intl.formatMessage({ id: 'Equipment' })} `}>
              <MenuItem><a href='accesory'>{intl.formatMessage({ id: 'Accesory' })} </a></MenuItem>
              <MenuItem><a href='badge'>{intl.formatMessage({ id: 'Badge' })} </a></MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'Equipment' })} `}>
                <MenuItem><a href='c50'>{intl.formatMessage({ id: 'C50' })} </a> </MenuItem>
                <MenuItem><a href='c55'>{intl.formatMessage({ id: 'C55' })}  </a></MenuItem>
                <MenuItem><a href='faires'>{intl.formatMessage({ id: 'Faires' })}</a> </MenuItem>
                <MenuItem><a href='Equipment'>{intl.formatMessage({ id: 'Equipment' })}</a> </MenuItem>
                
                
            </SubMenu>
          </SubMenu>
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
          <Route path='/contentCreators' exact component={Content} />
          <Route path='/customFeatures' component={CustomFeatures} />
          <Route path='/accesory' component={Accesory} />
          <Route path='/act4' component={Act4} />
          <Route path='/badge' component={Badge} />
          <Route path='/books' component={Books} />
          <Route path='/box' component={Box} />
          <Route path='/c50' component={C50} />
          <Route path='/c55' component={C55} />
          <Route path='/equipment' component={Equipment} />
          <Route path='/faires' component={Faires} />
          <Route path='/fish' component={Fish} />
          <Route path='/perfection' component={Perfection} />
          <Route path='/prestige' component={Prestige} />
          <Route path='/resistance' component={Resistance} />
          <Route path='/rune' component={Rune} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/server' component={Server} />
          <Route path='/shell' component={Shell} />
          <Route path='/sp' component={SP} />
          <Route path='/tatto' component={Tatto} />
          <Route path='/titles' component={Titles} />
          <Route path='/wings' component={Wings} />
          <Route path='/winter' component={Winter} />
          <Route path='/pets' component={Pets} />
          <Route path='/psp' component={Psp} />
          <Route path='/shop' component={Shopupdate} />
          <Route path='/wheel' component={Wheel} />
          <Route path='/raids' component={Raids} />
          <Route path='/costumes' component={Costiumes} />
          <Route path='/p8' component={p8} />
          <Route path='/marathon' component={marathon} />
          <Route path='/contentcreator' component={ContentCreator} />
          
          
          

       </Switch>   
     </Router>
    </div>
  );
};

export default Aside;

