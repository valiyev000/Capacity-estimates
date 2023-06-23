import {memo} from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Navbar() {

    console.log("Navbar render")
    
    return (
        <nav className='navBar'>
            <NavLink to="/"><h2 className="brandName">BrandName</h2></NavLink>
            <div className="personal">
                <div className="avatar"></div>
                <div className="userName">Agabey Valiyev</div>
            </div>
        </nav>
    )
}


export default memo(Navbar)