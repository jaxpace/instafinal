import React from 'react';
import css from './Navbar.module.css';


function Navbar(props) {
    function handleNavChange(page){
      console.log('page', page);
        if (props.onNavChange){
            props.onNavChange(page);
        }
    }
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange("home")}>
                    <img src='https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fhome.svg?v=1614382900187' alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange("explore")}>
                    <img src='https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fexplore.svg?v=1614382900067' alt="Explore"/>
                </button>
            </div>
						            <div className={css.navItem}>
                <button onClick={e=>handleNavChange("newpost")}>
                    <img src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fnewpost.svg?v=1614382900337" alt="New Post"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange("activity")}>
                    <img src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flike.svg?v=1614382900207" alt="Activity"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange("profile")}>
                    <img src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fprofile.svg?v=1614382900375" alt="Profile"/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;