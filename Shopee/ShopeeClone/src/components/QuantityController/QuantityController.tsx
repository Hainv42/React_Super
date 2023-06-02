import React from 'react'
import InputNumber, { InputNumberProps } from '../InputNumber'

interface Props extends InputNumberProps {
  max?: number
  onIncrese: (value: number) => void

  onDecrese: (value: number) => void
  className?: string
}

export default function QuantityController({ max, onIncrese, onDecrese }: Props) {
  return (
    <div className='ml-10 flex items-center'>
      <button className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M18 12H6' />
        </svg>
      </button>
      <InputNumber
        value={1}
        classNameInput='h-8 w-14 border-b border-t border-gray-300 p-1 text-center outline-none'
        classNameError='hidden'
        className=''
      />

      <button className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}
