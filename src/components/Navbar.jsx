import {memo} from 'react'

function Navbar() {

    console.log("Navbar render")
    
    return (
        <nav className='navBar'>
            <h2 className="brandName">BrandName</h2>
            <div className="personal">
                <div className="avatar"></div>
                <div className="userName">Agabey Valiyev</div>
            </div>
        </nav>
    )
}


export default memo(Navbar)