import React from 'react'
import { Button, FormControl, Input, useDisclosure } from "@chakra-ui/react"
import { Modal,ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader textAlign="center">WELCOME!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                {/* <FormLabel>Your E-Mail</FormLabel> */}
                <Input ref={initialRef} placeholder='Your E-Mail' />
              </FormControl>
  
              <FormControl mt={4}>
                {/* <FormLabel>Last name</FormLabel> */}
                <Input placeholder='Password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' bg="black" mr={3}>
                LOGIN
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default InitialFocus;