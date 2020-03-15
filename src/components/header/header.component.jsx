import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({currentUser}) => (
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
    </div>
  </div>
)

// state refers to root reducer, which is an object
// root reducer has prop user
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

// pass current user to header component
export default connect(mapStateToProps)(Header);