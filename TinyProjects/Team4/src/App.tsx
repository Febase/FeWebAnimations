import React from 'react';
import styled from '@emotion/styled';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { G0 } from './pages/G0';
import { JH } from './pages/JH';
import { MS } from './pages/MS';
const pages = [
  {
    path: '/G0',
    element: <G0/>
  }, {
    path: '/JH',
    element: <JH/>
  }, {
    path: '/MS',
    element: <MS/>
  }   
]


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Nav>
        {pages.map(({path}) => {
          const active= location.pathname ===path;

          return (
            <StyledLink 
               className={classNames({active})} 
               to={path}
             >
               {path.split('/')[1]}
               {active && <UnderLine layoutId='underline'/>}
             </StyledLink>
         )
        })}
      </Nav>
      <Routes>
        {
          pages.map((page) => <Route {...page} />)
        }
      </Routes>
    </div>
  );
}

const Nav = styled.nav`
  text-align: center;
  padding: 10px;
  
`

const StyledLink = styled(Link)`
  font-size: 24px;
  margin-right: 18px;;
  font-weight: 700;
  text-decoration: none;
  color: #2E0249;
  display: inline-block;
  width: 150px;
  &:hover, &.active {
    color: #F806CC
  }
`

const UnderLine = styled(motion.div)`
  width: 100%;
  border-top: 2px solid #F806CC;
  height: 1px;
`

export default App;
