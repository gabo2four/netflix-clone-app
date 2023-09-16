import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import 'dotenv/config'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID, 
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name:"credentials",

            credentials:{
                username:{label:"Username",type:"text",placeholder:"jsmith"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials,req){
                
                if(!credentials.email || !credentials.password){
                    return null
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                })

                if(!user){
                    return null
                }

                return user.password == credentials.password ? user : null

            }
        })
    ],
    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
})


export { handler as GET, handler as POST }




