import {Link} from 'react-router-dom'

import classes from './MainNavBar.module.css'


function MainNavBar() {
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li className={classes.logo}>
                    <Link className={classes.link} to='/'><span className='Rainbow-text'>cor</span><span className='bold'>een</span></Link>
                </li>
                <li>
                    <Link className={classes.link} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={classes.link} to='/produkte'>Produkte</Link>
                </li>
                <li>
                    <Link className={classes.link} to='/spendenKlima'>🌳</Link>
                </li>
                <li>
                    <Link className={classes.link} to='/warenkorb'><i class="fa fa-shopping-cart"></i></Link>
                </li>
                <li>
                    <Link className={classes.link} to='/info'>Info</Link>
                </li>
                
            </ul>
        </nav>
    </header>
    );
}

export default MainNavBar;