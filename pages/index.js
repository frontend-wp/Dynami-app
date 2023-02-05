import Link from 'next/link'

export default function Home(){
    return(
        <>
         <h1>Hello World</h1>
         <p>this is crazy</p>
         <Link href="/about">about us</Link>
        </>
    )
}