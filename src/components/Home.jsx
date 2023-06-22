import { memo } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";
import trashIcon from '../assets/trashIcon.svg'
import calendarIcon from '../assets/calendarIcon.svg'


function Home({ mainData }) {

    console.log("Home render")

    // console.log(mainData)

    return (
        <main className='homeMain'>
            <div className="pageTitle">
                <div className="avatar">BrandLogo</div>
                <div className="title">Capacity Estimates</div>
            </div>
            <button className="newSprint">
                <AiOutlinePlusCircle />
                <span>Yeni Sprint</span>
            </button>
            <div className="flexContainer">
                {mainData.length && mainData.map((e, i) => {
                    return (
                        <Link key={e.id} to={`/sprint/${e.id}`}>
                            <img src={calendarIcon} alt="calendarIcon" />
                            <span>Sprint {e.id}</span>
                            <img src={trashIcon} alt="trashIcon" />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}


export default memo(Home)