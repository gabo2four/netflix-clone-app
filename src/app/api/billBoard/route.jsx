import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    console.log("Holaaaaaaa")
    const movies = await prisma.movie.findMany()
    console.log('api',movies)
    return NextResponse.json(movies)
    
}
