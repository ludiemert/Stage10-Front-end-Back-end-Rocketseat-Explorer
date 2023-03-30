import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import{ useAuth } from '../../hooks/auth';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background} from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }
  
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to follow everything you watch!!!</p>

        <h2>Sign In</h2>

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

        <Button title="Enter" onClick={handleSignIn} />  

        <Link to="/register">
          Create Account
        </Link>
      </Form>

      <Background />

    </Container>
  );
}