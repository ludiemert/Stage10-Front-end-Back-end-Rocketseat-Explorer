import { useState } from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft  } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { api } from "../../services/api"; //importando a API para o back-end

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background} from "./styles";


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!!!!");
  }
 
  api.post("/clients", { name, email, password }) 
      .then(() => {
      alert("Usuario cadastrado com sucesso!!!!");
      navigate('/');     
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);      
      } else {
        alert("nao foi possivel cadastrar")
      }
  });
}

  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Application to follow everything you watch!!!</p>

        <h2>Create Your Account</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="Password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Register" onClick={handleSignUp} />  

        <Link to="/">
          <FiArrowLeft />    
            Return to Login
        </Link>

      </Form>

    </Container>
  );
}

