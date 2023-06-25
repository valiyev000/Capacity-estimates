import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { LuSettings2 } from "react-icons/lu";
import { useFormik } from 'formik';


export default function Sprint({ mainData, setMainData }) {

  const [forRender, setForRender] = useState(false)

  const { id } = useParams() //meselen id 5'di

  let currentSprint = mainData.find((e, i) => e.id === +id) // linkdeki id'ye uygun olaraq mainData'dan melumat tapilir ve currentSprint'e assign olunur

  const { dataCells } = currentSprint

  console.log(dataCells)


  // const initialValues = {};
  // inputs.forEach(input => {
  //   initialValues[input.name] = input.value;
  // });
  // const formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  useEffect(()=>{


    
  },[])

  const firstFormValues = {}

  dataCells[0].inputs.forEach((e, i) => {
    firstFormValues[e.name] = e.value
  });
  console.log(firstFormValues) //todo burda qalmisdim

  const firstForm = useFormik({
    initialValues: firstFormValues,
    onSubmit: (val) => {
      console.log(val)
    }
  });




  function newInput(event) { //event dataCell'in elementlerinden click olunan birini temsil edir
    event.inputs.push(
      {
        id: event.inputs.length + 1,
        name: `New input ${event.inputs.length + 1}`,
        value: 0
      }
    )
    setForRender((prev) => !prev)
    console.log(event.inputs)
  }



  return (
    <main className='sprintMain'>
      <div className="absolute">Sprint{id}</div>
      {dataCells.length && dataCells.map((event, index) => {
        return (
          <section key={index}>
            <div className="title">
              <div className="text">{event.title}</div>
              <LuSettings2 />
            </div>
            <div className="context">
              {event.inputs.map((e, i) => {
                return (
                  <div className='inputs' key={e.id}>
                    <input
                      className='name'
                      type="text"
                      name={e.name}
                      id={e.name}
                      placeholder={e.name}
                    />
                    <input
                      type="text"
                      name={e.name}
                      id={e.name}
                      placeholder={e.value}
                    />
                  </div>
                )
              })}
              <button onClick={() => newInput(event)}>+Yeni input</button>
            </div>
          </section>
        )
      })}

    </main>
  )
}
