import Navigation from './Navigation';

function Header() {
  return (
    <>
    <header className='bg-yinmnBlue p-4 shadow-lg'>
      <h1 className='text-3xl font-bold text-white flex justify-center mb-2'>Daniel Drennen</h1>
      <div className='flex justify-center'>
        <Navigation />
      </div>
    </header>
    </>
  )
}

export default Header