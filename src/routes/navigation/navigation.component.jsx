import { Fragment, useState } from "react"
import { Outlet, Link } from "react-router-dom"

import Logo from '../../assets/logo.png'

import './navigation.styles.scss'
import './burger-menu.styles.scss'

const Navigation = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    
    const toggle_hide = () => {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
        setIsMenuClicked(!isMenuClicked)
    }

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            toggle_hide()
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    window.addEventListener('resize', () => {setViewportWidth(window.innerWidth)})

    if (viewportWidth < 600 ) {
    return (
        <Fragment>
            <div style={{width:'100%', height:'9vh'}}>
                <Link className="logo-container" to="/">

                </Link>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>

                <div className={menu_class}>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/gallery'>
                            Gallery
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/products'>
                            Products
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/aboutus'>
                            About us
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/contact'>
                            Contact
                        </Link>
                </div>
            <Outlet/>
            </div>
        </Fragment>
    )
    }
    else{
        return(
          <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">

                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/gallery'>
                        Gallery
                    </Link>
                    <Link className="nav-link" to='/products'>
                        Products
                    </Link>
                    <Link className="nav-link" to='/aboutus'>
                        About us
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
            <Outlet/>
          </Fragment>
        )  
}
    }
    
  

export default Navigation