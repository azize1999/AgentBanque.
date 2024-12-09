import React from 'react';
import Logo from '../../img/argentBankLogo.webp'; 
import './Header.scss'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { logout } from '../../redux/actions/auth.actions'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 


const Header = () => {
  // Sélectionne le token pour vérifier si l'utilisateur est connecté
  const isConnected = useSelector((state) => state.auth.token);
  // Sélectionne le prénom de l'utilisateur depuis le store Redux
  const firstname = useSelector((state) => state.user.userData.firstname);

  const dispatch = useDispatch(); // Permet de dispatcher des actions Redux
  const navigate = useNavigate(); // Permet de rediriger l'utilisateur vers une autre page

 
  const logoutHandler = () => {
    dispatch(logout()); 
    sessionStorage.clear(); 
    localStorage.clear(); 
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
              <p>{firstname}</p>
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
