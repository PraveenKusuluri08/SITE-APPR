import * as React from 'react';
import Button from '@material-ui/core/Button';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { TextField } from '@material-ui/core';
function Presentation(props) {
    const { handleChange, state } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>

            <Button onClick={onOpen}>Invite Employee  </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <form >
                        <ModalHeader>Invite New Employee</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                                    <TextField id="standard-basic" value={state.first_name} label="Employee Name" variant="standard" onChange={handleChange} name="employee_name" required fullWidth />

                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>

                                    <TextField id="standard-basic" value={state.designation} label="Designation" variant="standard" onChange={handleChange} name="designation" required />
                                    <TextField id="standard-basic" value={state.department} label="Department" variant="standard" sx={{ width: '200px' }} onChange={handleChange} name="department" required />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                                    <TextField id="standard-basic" label="Email Address" name="email" type='email' variant="standard" value={state.email} required fullWidth onChange={handleChange} />
                                </div>
                            </div>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type="submit">
                                Invite
                            </Button>
                        </ModalFooter>

                    </form>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Presentation