import logoHeader from '../images/logo-header.svg';
import React from 'react';
import {Link, Route} from "react-router-dom";

function Header({loggedIn, userEmail, onSignOut}) {
    return ( 
        <header className="header">
        <img
          src={logoHeader}
          alt="надпись на английском языке место Россия"
          className="header__logo"
        />
       
       {!loggedIn &&
                <>
                    {<Route path="/sign-up">
                        <Link to="/sign-in" className="header__link">Войти</Link>
                    </Route>}
                    {<Route path="/sign-in">
                        <Link to="/sign-up" className="header__link">Регистрация</Link>
                    </Route>}
                </>
            }
            

            {loggedIn &&
                <div className="header__nav">
                    <p className="header__email">{userEmail}</p>
                    <div className="header__link header__link_out" onClick={onSignOut} >Выйти</div>
                </div>
            }
      </header>

    )}

    export default Header;
