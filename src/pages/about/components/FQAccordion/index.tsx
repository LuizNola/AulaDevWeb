import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';

const questions = [
  {
    ariaCcontrols: 'content1',
    id: 'header1',
    title: 'O que posso encontrar nessas peguntas?',
    text: 'Um absoluto e sonoro NADA :D'
  },
  {
    ariaCcontrols: 'content2',
    id: 'header2',
    title: 'Então pra que elas servem?',
    text: 'Para mostrar que eu sei usar accordions e tambem para preencher espaço da pagina sobre'
  },
  {
    ariaCcontrols: 'content3',
    id: 'header3',
    title: 'Quais as funcionalidade do site?',
    text: 'Sim'
  },
  {
    ariaCcontrols: 'content4',
    id: 'header4',
    title: 'Caso tenha mais duvidas o que devo fazer?',
    text: 'Não entre em contato! Faça qualquer coisa, mas nao entre em contato. Estamos ocupados de mais para te ignorar'
  },
]

export default function FQAccordion() {
  return (
<>
    <Divider sx={{mt: '2rem', mb: '2rem'}}/>
      <Typography variant='h5' >Perguntas frequentes</Typography>
      {questions.map((question) => { 
        return (
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            mt: '2rem'
          }}> 
          <Accordion sx={{minWidth: '100%'}} key={question.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={question.ariaCcontrols}
              id={question.id}
            >
              <Typography>{question.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {question.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Box>
        )
      } )}
    
 </>
 );
}