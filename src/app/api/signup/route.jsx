import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req) {
    console.log("NOSE")
    const body = await req.json()
    const {name,email,password} = body.data

    console.log("BODYYY",body,name,email,password)

    if(!name || !email || !password){
        console.log("pasa 1")

        return new NextResponse({status:400})
    }

    const exist = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(exist){
        return new NextResponse({status:"400, caca"})
    }

    const user = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    console.log(user)
    return NextResponse.json(user)

}
