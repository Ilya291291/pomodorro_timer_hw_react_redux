import React, { useState } from "react";

const useModal = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = (): void => {
    setIsOpen(true)
  }

  const toggleClose = (): void => {
    setIsOpen(false)
  }
  return {
    isOpen,
    toggleOpen,
    toggleClose
  }
}

export default useModal