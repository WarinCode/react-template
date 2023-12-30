import React from 'react'

const Container = ({ children }) => {
  return (
    <section className="w-full flex flex-col gap-12 m-auto px-20 py-28 md:px-16 md:py-24 sm:px-8 sm:py-12">
        {children}
    </section>
  )
}

export default Container