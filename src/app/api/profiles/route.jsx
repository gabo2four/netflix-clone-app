import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req) {

  const body = await req.json()

  const idUser = await prisma.user.findUnique({
    where:{
        email:body.session.user.email
    }
  })
  console.log("profiles",idUser)

  const profilesJson = await prisma.profiles.findUnique({
    where:{
        userId:"clm5wcktp0000finco3ezglk8"
    }
  })

  const jsonList = profilesJson.profiles.slice(2,profilesJson.profiles.length-2).split("},{")

  const listMap = jsonList.map((e)=>{
    const obj = JSON.parse('{'+e+'}');
    return obj
  })


  return NextResponse.json(listMap)

}

