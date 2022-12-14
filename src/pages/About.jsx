function About() {
    return (
      <>
        <h1 className='text-6xl mb-4'>Responsive Website</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app using Tailwind and
          <a href='https://daisyui.com'>
            {' '}
            Daisyui
          </a>{' '}
           by
          <strong>
            <a href='https://github.com/Endreash'> Endreash</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Author:
          <a className='text-white' href='https://github.com/Endreash'>
            Endreas
          </a>
        </p>
      </>
    )
  }
  
  export default About