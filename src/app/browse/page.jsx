'use client'
import { useSession,getProviders} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BillBoard from '../components/BillBoard'
import InfoModal from '../components/InfoModal'
import RowListMovie from '../components/RowListMovie'

function page() {

  const router = useRouter()

  const {data:session,status} = useSession()
  console.log("session",session)
  console.log("status",status)
  
  useEffect(()=>{
    (async () => {
      const providers = await getProviders()
      console.log(providers)
    })
  },[])

  if(status !== "loading" && status !== "authenticated"){
    router.push('/')
  }

  return (
    <div>
        {
          session ? (
            <div className=''>
              <InfoModal className=""></InfoModal>
              <Navbar></Navbar>
              <BillBoard></BillBoard>
              <RowListMovie titleRow={"Trends"} ></RowListMovie>

            </div>
          ) : (
            <div>CARGANDO</div>
          )
        }

    </div>
  )
}

export default page