import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast
} from '@chakra-ui/react'
export default function contacto() {
  const toast = useToast()
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    phone:'',
    company:'',
    date:'',
    paxAmmount:''
  })

  const submitHandler= event =>{
    event.preventDefault()
    toast({
      title: 'Gracias por contactarnos!',
      description: "Estamos procesando tu consulta y te responderemos a la brevedad",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  const handleChange = e => {
    setInputs(prevState=>({...prevState,[e.target.name]:e.target.value}))
    console.log(e.target.value)
  }
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.FormControl}>
        <form onSubmit={submitHandler}>
      <FormControl>
  <FormLabel>Nombre y apellido</FormLabel>
  <Input type='text' value={inputs.name} onChange={handleChange} name="name"/>
  <FormLabel>Email</FormLabel>
  <Input type='email' value={inputs.email} onChange={handleChange} name="email"/>
  <FormLabel>Telefono</FormLabel>
  <Input type='number' value={inputs.phone} onChange={handleChange} name="phone"/>
  <FormLabel>Empresa</FormLabel>
  <Input type='text' value={inputs.company} onChange={handleChange} name="company"/>
  <FormLabel>Fecha de viaje </FormLabel>
  <Input type='date' value={inputs.date} onChange={handleChange} name="date" color={'white'}/>
  <FormLabel>Cantidad de personas</FormLabel>
  <Input type='number' value={inputs.paxAmmount} onChange={handleChange} name="paxAmmount"/>
  <div className={styles.submitButton}>
  <Button
            mt={4}
            colorScheme='whiteAlpha'
            type='submit'
          >
            Enviar
          </Button>

  </div>

</FormControl>
</form>
      </div>
    </div>
  );
}
