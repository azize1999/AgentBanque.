import React from 'react';
import Logo from '../../img/argentBankLogo.webp';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/auth.actions';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  const isConnected = useSelector(store => store.auth.isConnected)
  const firstName = useSelector(store => store.user.userData.firstName)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    // on devait le rejouter meme si elle rest enregistrer ?
    navigate('/');
  };
   
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link> 
        {isConnected ? (
          <div className="connected">
            <Link to="/profile">
              <i className="fa-solid fa-2x fa-circle-user" />
              <p>{firstName}</p>
            </Link>
            <Link to="/" onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              <p>Sign out</p>
            </Link>
          </div>
        ) : (
          <div className="not-connected">
            <Link to="/login">
              <i className="fa-solid fa-circle-user" />
              <p>Sign In</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
