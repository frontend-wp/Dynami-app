import Link from 'next/link'

export default function Home(){
    return(
        <>
         <h1>About Page</h1>
         <p>this is the about page</p>
         <Link href="/">home</Link>
        </>
    )
}