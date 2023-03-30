import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles.js";
import { useParams, useNavigate } from "react-router";

import { api } from "../../services/api.js";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Details() {  
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("You want to remove the note???");
    if(confirm){
     await api.delete(`/movie/${params.id}`);
     navigate(-1);

    }

  }



  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();

  }, []);
   

  
  return(
      <Container>      
        <Header />

        {
          data &&
        <main>
          <Content>
           <ButtonText 
           title="Delete Note"
           onClick={handleRemove}
           
           />

           <h1>
            {data.title}
           </h1>

           <p>
           {data.description}
           </p>

          {
            data.Links &&
          <Section title="Helpful Links ">
              <Links>
               {
                data.Links.map(link => (
                <li key={String(link.id)}>
                  <a href={link.url} target="_blank">
                    {link.url}                    
                  </a>
                </li>
                  ))
               }
              </Links>
          </Section>
          }
              
        {
          data.tags &&
          <Section title="Markers">
            {
              data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)}
                  title={tag.name} 
                />
              ))
            }
          </Section>
        }

          <Button 
            title="Return" 
            onClick={handleBack}
          />
        </Content>
      </main>
        }
    </Container>  
  )
}

