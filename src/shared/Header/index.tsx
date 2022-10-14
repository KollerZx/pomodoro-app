import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Ampulheta com fundo em formato de splash" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
