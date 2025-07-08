'use client'

import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const base =
    'px-4 py-2 rounded font-semibold text-white shadow transition duration-300'

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    outline: 'bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100',
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
