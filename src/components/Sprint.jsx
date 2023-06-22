import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Sprint({ mainData }) {

  console.log("Sprint render")

  const { id } = useParams() //example id equal to 5

  const currentSprint = mainData.filter((e, i) => e.id === +id)


  console.log(currentSprint)

  const sample = true


  return (
    <div>Sprint{id}</div>
  )
}
