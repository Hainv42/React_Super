import React, { useEffect } from 'react'
import { useState } from 'react'

const initData = () => {
  console.log('init')
  return {
    country: 'Vietnam',
    city: {
      street: '388 Kim thanh, Hai Duong',
      house: 'Building',
    },
  }
}

const getAddress = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        country: 'USA',
        city: {
          street: '100, Nicalas, NY',
          house: 'Building',
        },
      })
    }, 3000)
  })
}

export default function User() {
  const [address, setAddress] = useState(initData)

  const profile = {}
  const handleChangeStreet = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '188 kim Thanh, Hai Duong'
      return {
        ...prevAddress,
        city: newCity,
      }
    })
  }

  useEffect(() => {
    // getAddress().then((res) => setAddress(res))
    console.log(profile)
  }, [profile])

  return (
    <div>
      <div>User Address</div>
      <p>Your coutry: {address.country}</p>
      <p>Your Street : {address.city.street}</p>
      <p>Your house : {address.city.house}</p>
      <button onClick={handleChangeStreet}>Change street</button>
    </div>
  )
}
