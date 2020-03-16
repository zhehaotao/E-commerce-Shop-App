import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?(
        <div className = 'option' onClick = {() => auth.signOut()}>SIGN OUT</div>)
        :
        (<Link className = 'option' to = '/signin'>SIGN IN</Link>
        )}
        <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

// state refers to root reducer, which is an object
// root reducer has prop user
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
})

// pass current user to header component
export default connect(mapStateToProps)(Header);