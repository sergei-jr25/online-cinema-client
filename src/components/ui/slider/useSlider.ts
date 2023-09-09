import { useState } from "react"


export const useSlider = (length: number) => {
   
   const [currentIndex, setCurrentIndex] = useState(0)
   const [sideIn, setIsSideIn] = useState(true)

   const nextIsExist = currentIndex + 1 < length
   const prevIsExist = currentIndex ? currentIndex - 1 < length : false

   const handleArrowClick = (direction: 'prev' | 'next') => {
      const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
         
      setIsSideIn(false)

      setTimeout(() => {
       setCurrentIndex(newIndex)  
       setIsSideIn(true)
      }, 300)      
   }

   return {nextIsExist, prevIsExist, handleArrowClick, currentIndex, sideIn}
}