import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import {db} from "../../firebase/firebase";
import {collection,addDoc } from 'firebase/firestore'
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
export default function Contacto({ contactPage }) {
  const toast = useToast();
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    paxAmmount: "",
  });

  const dbSave = async(data)=>{
    try {
      await addDoc(collection(db, "form"), data);
    } catch (e) {

    }
  }


  const submitHandler = (e) => {
    let err = {};
    e.preventDefault();
    for (let key in inputs) {
      if (inputs[key] == "") {
        if (Object.keys(inputs).includes(key) && key != "company") {
          err[key] = "required";
        }
      } else {
        err[key] = "";
      }
    }

    const isvalidLenght = (value, limit) => {
      return value < limit;
    };

    if (inputs.name) {
      if (
        !inputs.name.match(/^[A-Za-zñáéíóúü\s]*$/) ||
        !isvalidLenght(inputs.name.length, 40)
      ) {
        err["name"] = "ingrese nombre valido";
      } else {
        err["name"] = "";
      }
    }
    //email
    if (inputs.email) {
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if (!validateEmail(inputs.email)) {
        err["email"] = "ingrese mail valido";
      } else {
        err["email"] = "";
      }
    }

    //
    if (inputs.phone) {
      const validateNumber = (number) => {
        return String(number)
          .toLowerCase()
          .match(
            /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
          );
      };
      if (!validateNumber(inputs.phone)) {
        err["phone"] = "ingrese numero valido";
      } else {
        err["phone"] = "";
      }
    }

    if (inputs.date) {
      let date = new Date();
      if (inputs.date < date.toISOString().split("T")[0]) {
        err["date"] = "ingrese fecha valida";
      } else {
        err["date"] = "";
      }
    }
    if (inputs.paxAmmount) {
      if (e.target.value < 1) {
        err["paxAmmount"] = "el minimo es ...";
      } else {
        err["paxAmmount"] = "";
      }
    }
    let count = 0;
    for (let er in err) {
      if (err[er] != "") {
        count++;
      }
    }
    if (count == 0 && !sent) {
      let contactDate=new Date()
      dbSave({...inputs,contactDate})
      toast({
        title: "Gracias por contactarnos!",
        description:
          "Estamos procesando tu consulta y te responderemos a la brevedad",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setSent(true);
      if (contactPage) {
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 1000);
      }
    } else {
      setErrors(err);
    }
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFocus = (e) => {
    let err = {};
    const isvalidLenght = (value, limit) => {
      return value < limit;
    };

    //name
    if (e.target.name == "name") {
      if (e.target.value.trim() == "") {
        err[e.target.name] = "required";
      } else if (
        !e.target.value.match(/^[A-Za-zñáéíóúü\s]*$/) ||
        !isvalidLenght(e.target.value.length, 30)
      ) {
        err[e.target.name] = "ingrese nombre valido";
      } else {
        err[e.target.name] = "";
      }
    }
    //email
    if (e.target.name == "email") {
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if (e.target.value.trim() == "") {
        err[e.target.name] = "required";
      } else if (!validateEmail(e.target.value)) {
        err[e.target.name] = "Ingrese un email valido";
      } else {
        err[e.target.name] = "";
      }
    }

    if (e.target.name == "phone") {
      const validateNumber = (number) => {
        return String(number)
          .toLowerCase()
          .match(
            /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
          );
      };
      if (e.target.value.trim() == "") {
        err[e.target.name] = "required";
      } else if (!validateNumber(e.target.value)) {
        err[e.target.name] = "Ingrese un telefono valido";
      } else {
        err[e.target.name] = "";
      }
    }

    if (e.target.name == "date") {
      let date = new Date();
      if (e.target.value < date.toISOString().split("T")[0]) {
        err["date"] = "ingrese fecha valida";
      } else {
        err["date"] = "";
      }
    }
    if (e.target.name == "paxAmmount") {
      if (e.target.value < 1) {
        err["paxAmmount"] = "el minimo es ...";
      } else {
        err["paxAmmount"] = "";
      }
    }
    setErrors((prevState) => ({ ...prevState, ...err }));
  };
  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>Nombre y apellido *</FormLabel>
        <Input
          isInvalid={errors && errors.name}
          type="text"
          value={inputs.name}
          onChange={handleChange}
          onBlur={handleFocus}
          name="name"
        />
        {errors && errors.name == "required" && (
          <p className={styles.error}>Ingrese un nombre</p>
        )}
        {errors && errors.name == "ingrese nombre valido" && (
          <p className={styles.error}>{errors.name}</p>
        )}

        <FormLabel>Email *</FormLabel>
        <Input
          isInvalid={errors && errors.email}
          value={inputs.email}
          onChange={handleChange}
          onBlur={handleFocus}
          name="email"
        />
        {errors && errors.email == "required" && (
          <p className={styles.error}>Ingrese un email</p>
        )}
        {errors && errors.email != "required" && (
          <p className={styles.error}>{errors.email}</p>
        )}
        <FormLabel>Telefono *</FormLabel>
        <Input
          isInvalid={errors && errors.phone}
          type="tel"
          value={inputs.phone}
          onChange={handleChange}
          onBlur={handleFocus}
          name="phone"
        />
        {errors && errors.phone == "required" && (
          <p className={styles.error}>Ingrese un telefono</p>
        )}
        {errors && errors.phone != "required" && (
          <p className={styles.error}>{errors.phone}</p>
        )}
        <FormLabel>Empresa</FormLabel>
        <Input
          type="text"
          value={inputs.company}
          onChange={handleChange}
          onBlur={handleFocus}
          name="company"
        />
        <FormLabel>Fecha de viaje *</FormLabel>
        <Input
          isInvalid={errors && errors.date}
          type="date"
          value={inputs.date}
          onChange={handleChange}
          onBlur={handleFocus}
          name="date"
          color={"white"}
        />
        {errors && errors.date == "required" && (
          <p className={styles.error}>Ingrese una fecha</p>
        )}
        {errors && errors.date != "required" && (
          <p className={styles.error}>{errors.date}</p>
        )}
        <FormLabel>Cantidad de personas *</FormLabel>
        <Input
          isInvalid={errors && errors.paxAmmount}
          type="number"
          value={inputs.paxAmmount}
          onChange={handleChange}
          onBlur={handleFocus}
          name="paxAmmount"
        />
        {errors && errors.paxAmmount == "required" && (
          <p className={styles.error}>Ingrese la cantidad de pasajeros</p>
        )}
        {errors && errors.paxAmmount != "required" && (
          <p className={styles.error}>{errors.paxAmmount}</p>
        )}
        <div className={styles.submitButton}>
          <Button mt={4} colorScheme="green" type="submit">
            Enviar
          </Button>
        </div>
      </FormControl>
    </form>
  );
}
