import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { LoginSchema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = LoginSchema

export default function Login() {
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
    }
  )
  console.log(errors)

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-2 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'> Đăng Nhập </div>
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
              />
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='item-center mt-8 flex justify-center'>
                <span className='text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400' to='/Register'>
                  Đăng Ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
