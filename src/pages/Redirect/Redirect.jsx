import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
export default function ({where}) {
  const navigate = useNavigate()
  useEffect(()=>{
      navigate(`/${where}`)
  },[])
  return (
    <div></div>
  )
}
