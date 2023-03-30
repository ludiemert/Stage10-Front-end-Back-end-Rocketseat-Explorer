import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiSearch, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { api } from "../../services/api";

import { Container, Links, Returnn, Brand, Menu, Search, Content } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Section } from "../../components/Section";
import {Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import {Movie} from "../../components/Movie";

export function Home_two() { 
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();


  function handleTagSelected(tagName){
    if(tagName === "all") {
      return setTagsSelected([]);
    }

  function handleDetails(id){
    navigate(`/details/${id}`);

  }  

  const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);

    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }

  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  },[]);

  
  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}&tags=${tagSelected}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [tagsSelected, search]); 

  return (
    <Container>
      <Header />
      <main>
      <Content>
       
          <div className="add">

          <Brand>
            <h1>My Movies</h1>
          </Brand>
          
      
          <Links to="/new_movie">
            <FiPlus />
            Add Movie
          </Links>

          </div>          

          
            <Section>  
              
              <Search>
                <Input
                 placeholder="Search by Title" 
                 icon={FiSearch}
                 onChange={(e) => setSearch(e.target.value)}                 
                 />
              </Search>    

              
              <div className="show_movie">      
                <h2>Interestellar</h2>
                  <img 
                      src="../../../src/assets/stars.png"
                      alt="stars" />  
                
                  <p>
                    Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro
                    de data desconhecida.
                  </p>

                  <Section title="My Movies" >
            
                  {
                    movies.map(movie => (
                      <Movie   
                        key={String(movie.id)}
                        data={movie}  
                        onClick={() => handleDetails(movie.id)}  
                    />
                    ))
                  }
                  </Section>
              </div>
            </Section>         

            
          <Section>
             <div className="show_movie">
                <h2>Menu - Tags Movies</h2>        

                <Menu>
                  <li>
                    <ButtonText 
                    title="All" 
                    onClick={() => handleTagSelected("all")}
                    isActive ={tagsSelected.length === 0 }
                    />
                    </li>
                  {
                    tags && tags.map(tag => (
                      <li key={String(tag.id)}>
                        <ButtonText 
                        title={tag.name} 
                        onClick={() => handleTagSelected(tag.name)}
                        isActive ={tagsSelected.includes(tag.name)}
                        />
                      </li>
                  ))
                  }
              </Menu>
            </div>
          </Section>    

      </Content>
      </main>
    </Container>
  );
}


