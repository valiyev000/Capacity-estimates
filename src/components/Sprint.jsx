import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Sprint() {

  console.log("Sprint render")

  const {id} = useParams()


  return (
    <div>Sprint{id}</div>
  )
}
