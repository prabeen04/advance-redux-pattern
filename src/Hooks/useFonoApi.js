import React, { useState, useEffect } from 'react'
const url = 'https://fonoapi.freshpixl.com/v1/getAdvice'
const token = '1a0fc4ad0d1c4f0ba86a99cbfc9db19535b9145bb5bd865b'
export default function useFonoApi() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url, {
      method: 'post',
      headers: {
        token
      }
    })
      .then(res => {
        window.resp = res
        res.json()
      }
      )
      .then(data => setData(data))
      .catch(console.log)

  }, [])
  return data
}
