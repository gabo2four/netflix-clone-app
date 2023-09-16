import React, { useEffect ,useContext} from 'react'
import {BsFillPlayFill,} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {UserContext} from '../context/UserProvider';
import openModal from '../hooks/openModal';
import { useRouter } from 'next/navigation';

function BillBoard() {


    const {currentMovie,setCurrentMovie,
      movieCurrentCount,setMovieCurrentCount,
      movies,setMovies,
      contro,setContro,
      setMovieModal,
      setCurrentWatchMovie
    } = useContext(UserContext)

    const router = useRouter()

    useEffect(()=>{
      if(movies.length == 0){
        const getMovie = async () =>{
          const response = await fetch('/api/billBoard',{
              method:'GET',
            })  
          const moviesList = await response.json()
          console.log("PLEASE1",moviesList)
          setMovies(moviesList)
          setCurrentMovie(moviesList[0])
          setMovieCurrentCount(0)
        }
        getMovie()
      }
    },[])

    console.log(movieCurrentCount)

    useEffect(() => {
      console.log(contro)
      if(contro == true){
        var gameStartInternal = setInterval(() => {
          setMovieCurrentCount(state => state + 1);
          
        }, 25000);
        setContro(false)
      }

      if(movieCurrentCount > movies.length-1){
        setMovieCurrentCount(0)
      }
      setCurrentMovie(movies[movieCurrentCount])
      
      
    }, [contro,movieCurrentCount]);

    
    return (
    <div className='relative lg:h-screen'>

        <video src={currentMovie?.videoUrl} muted disablePictureInPicture disableRemotePlayback  loop autoPlay className='opacity-50 h-[500px] md:h-[600px] lg:h-screen  w-full object-cover'>
        </video>
        <div className='absolute top-[15%] sm:top-[30%] md:top-[30%] lg:top-[30%] ml-16'>
          <p className='text-xl md:text-4xl lg:text-6xl drop-shadow-xl'>{currentMovie?.title}</p>  
          <p className='text-md md:text-xl lg:text-2xl mt-8 w-[50%] drop-shadow-xl'>{currentMovie?.description}</p>  
          <div className='mt-5 flex space-x-5'>
          <div className='h-[45px] bg-white text-black rounded'>
            <button className='h-full space-x-1 px-5 flex font-bold' onClick={()=>{setCurrentWatchMovie(currentMovie),router.push("/watch")}}>
              <div className='grid content-center h-full'>
                  <BsFillPlayFill size={25}/>
              </div>
              <div className='grid content-center h-full'>
                  Play
              </div>
            </button>
          </div>

          <div className='h-[45px] bg-white bg-opacity-25 rounded' 
            onClick={(e)=>{
              setMovieModal(currentMovie)
              openModal()
            }}
          >

            <button className='px-5 flex h-full space-x-1 font-bold'>

              <div className='grid content-center h-full'>
                <AiOutlineInfoCircle size={25}/>
              </div>
              
              <div className='grid content-center h-full'>
                More Info
              </div>

            </button>
          
          </div>
        </div>
        </div>
        

    </div>
  )
}

export default BillBoard