import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingComponent = ({className,wrapper,txt}) => {
  return (
    <TypeAnimation
    sequence={[
        txt, // Types 'One'
      1000, // Waits 1s
      () => {
        console.log('Done typing!'); // Place optional callbacks anywhere in the array
      }
    ]}
    wrapper={wrapper}
    cursor={false}
    repeat={1}
    className={className}
  />
  )
}

export default TypingComponent