import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles";

import { FiPlus } from 'react-icons/fi';

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import {Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  },[]);



  return (
    <Container>

      <Header />

      <main>
        <Content>

          <Button title="Add Movies" />
          
          <h1>My Movies</h1>
          <h2>Interestellar</h2>
          
          <img 
              src="../../../src/assets/stars.png"
              alt="stars" />  
            
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro
             de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, 
             a filha de dez anos de Cooper. </p>

          <Section title="Type Movies" >
            <Links>
              <Tag title="Drama" />
              <Tag title="Family" />
              <Tag title="Science Fiction" />                      
            </Links>
          </Section>

          <Section title=" Tags Movies" >
            <Menu>
              <li>
                <ButtonText 
                  title="Todos" 
                  isActive 
                  />
              </li>
              {
                tags && tags.map(tag => (
                  <li key={String(tag.id)}>
                    <ButtonText 
                      title={tag.name} 
                      />
                  </li>
                ))
              }
            </Menu>
          </Section>

          <ButtonText title="Return" />

      </Content>
      </main>
    </Container>
  )
}