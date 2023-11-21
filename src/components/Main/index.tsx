import './index.css'
import React from 'react'
import Timer from 'components/Timer'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Form from 'components/Form'
import FormHeader from 'components/FormHeader'

import useModal from 'hooks/useModal'


const Main = () => {

  const { isOpen, toggleOpen, toggleClose } = useModal()

  return (
    <main className='pomodorro-main'>
        <Modal isOpen={isOpen} onClose={toggleClose}>
           <FormHeader onClose={toggleClose}/>
           <Form />
        </Modal>
        <Timer />
        <Button onClick={toggleOpen}/>
    </main>
  )
}

export default Main