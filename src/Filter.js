import React from 'react'
import { Link } from 'react-router'

const Filter = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
  {children}
  </Link>
)
