import React, { HtmlHTMLAttributes } from 'react'

function Button1(props:HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={`relative rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] ${props.className} `}>
    <button className="w-full py-2 px-5 text-sm font-bold  tracking-widest text-gray-400 uppercase">
   {props.children}
    </button>
  </div>
  )
}

export default Button1