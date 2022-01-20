import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss';
import {auth} from '../../firebaseUtility/firebaseUtility'
import {connect} from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.action';

function Header({currentUser, setCurrentUser}) {
    const handleSignOut = () => {
        auth.signOut();
        setCurrentUser(null)
    }

    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className="logo" />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={handleSignOut}>SIGN OUT</div> :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => (
        dispatch(setCurrentUser(user))
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
