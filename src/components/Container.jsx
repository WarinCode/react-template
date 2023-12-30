import React from 'react'

const Container = ({ children }) => {
  return (
    <section className="w-full flex flex-col gap-12 m-auto px-20 py-28">
        {children}
    </section>
  )
}

export default Container