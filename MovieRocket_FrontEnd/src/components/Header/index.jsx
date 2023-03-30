import {RiShutDownLine} from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import {api} from '../../services/api';

import { Container, Profile, Logout } from "./styles";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useAuth } from "../../hooks/auth";

export function Header () {
    const { signOut, client } = useAuth();
    const navigation = useNavigate();

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    const avatarURL = client.avatar ? `${api.defaults.baseURL}/files/${client.avatar}` : avatarPlaceholder;
    const navigate = useNavigate()


    return(
        <Container>
            <div className='container'>
            <Profile to="/profile">
                <img 
                src={avatarURL}
                alt="Foto do usuário"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>{client.name}</strong>
                </div>      
            </Profile>

            <Logout onClick={handleSignOut}>
              <RiShutDownLine/>  
            </Logout>
            </div>
        </Container>

    )
}