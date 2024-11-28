import React from 'react'
import Services from '../components/Services/Services'

const Sessions = () => {
  return (
    <>
      <div className=''>
      <div>
      <main className=" mx-auto bg-white overflow-hidden">
        <section className="hero h-[640px] md:h-[940px] bg-session bg-center bg-blend-overlay bg-slate-700 bg-cover bg-no-repeat bg-fixed md:rounded-bl-[290px] relative ">
        <div className="container mx-auto h-full flex items-center justify-center sm:justify-start">
          {/* text */}
          <div className="hero__text w-[567px] flex flex-col items-center text-center md:text-left sm:items-start mt-10">
            <h1 className="h1 text-white mt-10 text-5xl font-primary">Amazing deep dive encounters</h1>
            <p className="text-white mt-8 text-xl">Take a deep dive into your inner realms with me and
            change your life</p>
          </div>
        </div>
        </section>
        
      </main>
    </div>
        <Services />
      </div>
    </>
  )
}

export default Sessions
