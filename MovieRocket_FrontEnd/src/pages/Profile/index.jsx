import { useState } from "react"; 
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { client, updateProfile } = useAuth();

  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = client.avatar ? `${api.defaults.baseURL}/files/${client.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }


  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld, 
    }

    const clientUpdated = Object.assign(client, updated);

    await updateProfile({ client: clientUpdated, avatarFile });

  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>     
                
        <button type="button"  
        title= "Return"  
        onClick={handleBack}  >  
        <FiArrowLeft size={28} />  
        </button>               
      </header>

      <Form>
        <Avatar>
          <img
          src={avatar}
          alt = {client.name}
          />   

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar> 
        
         <Input 
          placeholder="Name"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Current Password "
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />    

        <Input 
          placeholder="New Password "
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />  

        <Button title="Save" onClick={handleUpdate} />
      </Form>
      
    </Container>
  );
}