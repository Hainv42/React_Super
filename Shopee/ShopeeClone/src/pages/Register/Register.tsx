import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )
  console.log(errors)

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-2 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'> Đăng ký </div>
              <Input
                name='email'
                type='email'
                register={register}
                className='mt-8'
                placeholder='Email'
                errorMessage={errors.email?.message}
              />
              <Input
                name='password'
                type='password'
                register={register}
                className='mt-2'
                placeholder='Password'
                errorMessage={errors.password?.message}
                autoComplete='on'
              />
              <Input
                name='confirm_password'
                type='password'
                register={register}
                className='mt-2'
                placeholder='Confirm Password'
                errorMessage={errors.confirm_password?.message}
                autoComplete='on'
              />

              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng Ký
                </button>
              </div>
              <div className='item-center mt-8 flex justify-center'>
                <span className='text-gray-300'>Bạn đã có tài khoản chưa?</span>
                <Link className='text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
