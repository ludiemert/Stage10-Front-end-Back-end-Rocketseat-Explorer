import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import { api } from "../../services/api";
import { Container, Form } from "./styles";

export function New_Movie() {

  const[title, setTitle] = useState("");
  const [noteM, setNoteM] = useState("");
  const [description, setDescription] = useState("");

  const[links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const[documentarys, setDocumentarys] = useState([]);
  const [newDocumentary, setNewDocumentary] = useState("");

  function handleAddDocumentary() {
    setDocumentarys(prevState => [...prevState, newDocumentary]);
    setNewDocumentary("");
  }

  function handleRemoveDocumentary(deleted){
    setDocumentarys(prevState => prevState.filter(documentary => documentary !== deleted));
  }

  const[tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  function handleAddTags() {
    setTags(prevState => [...prevState, newTags]);
    setNewTags("");
  }

  function handleRemoveTags(deleted){
    setTags(prevState => prevState.filter(tags => tags !== deleted));
  }


  async function handleNewMovie(){
    if(!title){
      return alert("Digite o titulo da nota!!");
    }

    if(newLink){
      return alert("Voce deixou Link sem add no campo (+). Entao ADD ou REMOVE do campo e deixe vazio ");
    }


    if(newTags){ 
      return alert("Voce deixou Tag sem add no campo (+). Entao ADD ou REMOVE do campo e deixe vazio ");
    }

    await api.post("/movies", {
      title, 
      noteM,
      description,
      documentarys,
      tags,
      links
    });

    alert("Successfully created movie!!!! ");
    navigate(-1);
  }

  async function handleRemoveMovie(){
    await api.delete("/", {
      title, 
      noteM,
      description,
      documentarys,
      tags,
      links
    });

    alert("Remove Movie Successfully !!!! ");
    navigate("/");
  }
  

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
 
               <FiArrowLeft />                             
                <ButtonText  
                title="Return" 
                onClick={handleBack}
                />

                <h1>New Movie</h1> 
            
          </header>

          <div className="flex">
              <Input 
                placeholder="Title" 
                onChange={e => setTitle(e.target.value)}
              />

              <Input 
                placeholder="Your Note (from 0 to 5)"
                type="number"
                min="0"
                max="5"
                onChange={e => setNoteM(e.target.value)}
              >               
              </Input>
            </div>

            <Textarea 
              placeholder="Comments"
              onChange={e => setDescription(e.target.value)}               
            />

            <Section>
              <h1>Bookmark</h1>
              <div className="tagss">


              <Section title="Documentary">
                {
                  documentarys.map((documentary, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={documentary}
                      onClick={() => handleRemoveDocumentary(documentary)}            
                      />       
                  ))
                }

                <NoteItem 
                  isNew 
                  placeholder="Documentary"
                  value={newDocumentary}
                  onChange={e => setNewDocumentary(e.target.value)}  
                  onClick={handleAddDocumentary}   
                />

              </Section>
              

              <Section title="New Tags_mark">
                {
                  tags.map((tags, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={tags}
                      onClick={() => handleRemoveTags(tags)}            
                      />       
                  ))
                }

                <NoteItem 
                  isNew 
                  placeholder="New Bookmark"
                  value={newTags}
                  onChange={e => setNewTags(e.target.value)}  
                  onClick={handleAddTags}                     
                  />

              </Section>
              </div>

              <Section title="Helpful links">
                  {
                    links.map((link, index) => (
                      <NoteItem 
                        key={String(index)}
                        value={link}
                        onClick={() => handleRemoveLink(link)}            
                        />       
                    ))
                  }

                <NoteItem 
                    isNew 
                    placeholder="New Link" 
                    value={newLink}
                    onChange={e => setNewLink(e.target.value)}  
                    onClick={handleAddLink}            
                  />              
              </Section>

       
            </Section>


            <div className="books">
            <Button 
              title="Delete Movie" 
              onClick={handleRemoveMovie}
            />  

            <Button 
              title="Save Editions" 
              onClick={handleNewMovie}
             />  
           </div>

        </Form>
      </main>

    </Container>
  );
}