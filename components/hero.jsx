import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center'>
        <div>
            <div>
                <h1 className='text-8xl mb-4 gradient-title'>Manage your Finances</h1>
                <p>An AI-powered financial management platform that helps you track, <br />
                   analyze, and optimize your spending with real-time insights</p>
            </div>
            <div className='flex justify-center gap-4 mt-4 mb-6'> 
                <Link href={"/dashboard"}>
                    <Button size="lg" className="px-4">Get Started</Button>
                </Link>
    
                <Link href={"https://music.youtube.com/watch?v=8p5p2uTtDho&list=RDAMVMNIUQnGjOIL8"}>
                    <Button size="lg" variant="outline" className="px-4">Watch Demo</Button>
                </Link>
            </div>
        </div>
        <div> 
            <Image src={"/banner.jpeg"} width={1280} height={720} alt='Banner photo'/>
        </div>
    </div>
  )
}

export default Hero