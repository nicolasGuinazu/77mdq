import React from 'react';
import styles from '../styles/Home.module.css';
import {
  Button,
  Input,
  FormControl,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react'
export default function contacto() {
  const submitHandler= event =>{
    event.preventDefault()
  }
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.FormControl}>
        <form onSubmit={submitHandler}>
      <FormControl>
  <FormLabel>Nombre y apellido</FormLabel>
  <Input type='text' />
  <FormLabel>Email</FormLabel>
  <Input type='email' />
  <FormLabel>Telefono</FormLabel>
  <Input type='number' />
  <FormLabel>Empresa</FormLabel>
  <Input type='text' />
  <FormLabel>Fecha de viaje </FormLabel>
  <Input type='date' />
  <FormLabel>Cantidad de personas</FormLabel>
  <NumberInput max={50} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
  <div className={styles.submitButton}>
  <Button
            mt={4}
            colorScheme='whiteAlpha'
            type='submit'
          >
            Submit
          </Button>

  </div>

</FormControl>
</form>
      </div>
    </div>
  );
}
