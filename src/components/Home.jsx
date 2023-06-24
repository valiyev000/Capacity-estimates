import { memo, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";
import trashIcon from '../assets/trashIcon.svg'
import calendarIcon from '../assets/calendarIcon.svg'


function Home({ mainData, setMainData }) {

    console.log("Home render")

    function newSprint(e) {

        let lastSprintId = mainData[mainData.length - 1].id
        setMainData([
            ...mainData,
            {
                id: lastSprintId + 1,
                dataCells: [
                    {
                        title: "Corporate overhead",
                        inputs: [
                            {
                                id: 1,
                                name: "Standups",
                                value: 0
                            },
                            {
                                id: 2,
                                name: "Planning",
                                value: 0
                            },
                            {
                                id: 3,
                                name: "Refinement",
                                value: 0
                            },
                            {
                                id: 4,
                                name: "Chapter sync",
                                value: 0
                            },
                            {
                                id: 5,
                                name: "Digər görüşlər",
                                value: 0
                            },
                            {
                                id: 6,
                                name: "Təlim",
                                value: 0
                            },
                            {
                                id: 7,
                                name: "Şəxsi ehtiyaclar",
                                value: 0
                            }
                        ]
                    },
                    {
                        title: "Unplanned time",
                        inputs: [
                            {
                                id: 1,
                                name: "İclaslar",
                                value: 0
                            },
                            {
                                id: 2,
                                name: "Sorğular",
                                value: 0
                            },
                            {
                                id: 3,
                                name: "İcazələr",
                                value: 0
                            }
                        ]
                    },
                    {
                        title: "Tasks",
                        inputs: [
                            {
                                id: 1,
                                name: "Task 1",
                                value: 0
                            },
                            {
                                id: 2,
                                name: "Task 2",
                                value: 0
                            },
                            {
                                id: 3,
                                name: "Task 3",
                                value: 0
                            },
                            {
                                id: 4,
                                name: "Task 4",
                                value: 0
                            },
                            {
                                id: 5,
                                name: "Task 5",
                                value: 0
                            },
                            {
                                id: 6,
                                name: "Task 6",
                                value: 0
                            },
                            {
                                id: 7,
                                name: "Task 7",
                                value: 0
                            }
                        ]
                    }
                ]
            }
        ])
        // console.log(e.target)
        e.target.classList.add("newSprintAnimation")
        setTimeout(() => {
            e.target.classList.remove("newSprintAnimation")
        }, 500);
    }

    function deleteSprint(event, id) {
        event.preventDefault()
        event.stopPropagation()
        console.log(id)
        setMainData(mainData.filter((e) => e.id !== id))
    }


    return (
        <main className='homeMain'>
            <div className="pageTitle">
                <div className="avatar">BrandLogo</div>
                <div className="title">Capacity Estimates</div>
            </div>
            <button
                className="newSprint"
                onClick={(e) => newSprint(e)}
            >
                <AiOutlinePlusCircle />
                <span>Yeni Sprint</span>
            </button>
            <div className="flexContainer">
                {mainData.length && mainData.map((e, i) => {
                    return (
                        <Link key={e.id} to={`/sprint/${e.id}`}>
                            <img src={calendarIcon} alt="calendarIcon" />
                            <span>Sprint {e.id}</span>
                            <img src={trashIcon} alt="trashIcon" onClick={(event) => deleteSprint(event, e.id)} />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}


export default memo(Home)