import React from 'react'

export default function Button({text, link="#"}) {
  return <button className='px-6 py-2 font-light uppercase rounded-full text-white text-xl bg-[var(--accentColor)]
  hover:bg-[var(--brandColor)] transition-all ease-in-out
  '>{text}</button>
}
