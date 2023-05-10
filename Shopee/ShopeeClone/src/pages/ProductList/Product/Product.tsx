import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <Link to='/'>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://cf.shopee.vn/file/e51fd3074ef94265a73f5a3ae8221a84_tn'
            alt=''
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs  line-clamp-2'>
            Áo khoác gió nam nữ tráng bạc chống thấm nước chống gió lạnh hiệu quả , áo gió 3 khoá lót lưới chất đẹp giữ
            ấm
          </div>
          <div className='item-center mt-3 flex'>
            <div className=' max-w-[50%] truncate text-gray-500 line-through'>₫9.500</div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'> ₫</span>
              <span> 7.500</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='item-center flex'>
              <div className='relative'>
                <div className='absolute left-0 top-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enable-background='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x='0'
                    y='0'
                    className='h-3 w-3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit='10'
                    ></polygon>
                  </svg>
                </div>
                <svg
                  enable-background='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x='0'
                  y='0'
                  className='h3 w-3 fill-current text-gray-300'
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-miterlimit='10'
                  ></polygon>
                </svg>
              </div>
            </div>
            <div className='ml-2 text-sm'>
              <span>5.66k </span>
              <span>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
