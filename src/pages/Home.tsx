import Background from '../assets/images/kermit.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>Hop on!! Let my take  you to my Cam Fam..</h3>
        </div>
    </div>
  )
}

export default Home
