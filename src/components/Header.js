import React, { useState } from 'react'

export default function Header() {
  const headStyle = {
    h1: {
      backgroundColor: 'lightblue',
      margin: 'auto',
      padding: '10px',
      textAlign: 'center',
    }
  }
  return (
    <div>
      <h1 style={headStyle.h1}>AOT Memory</h1>
    </div>
  )
}
