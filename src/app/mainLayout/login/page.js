'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {
    const navigate=useRouter();
    const itemid=1
    function loginDetail(itemid){
        navigate.push(`/mainLayout/login/${itemid}`)

    }
  return (
    <>
    <div>LoginPage</div>
    <button onClick={loginDetail}>got login detail page</button>
    </>
  )
}

export default LoginPage