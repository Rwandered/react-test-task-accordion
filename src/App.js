import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/AccordionItem/AccordionItem";


const App = () => {
  return (
    <Accordion>
      <AccordionItem title='AccordionItem1'>
        Lorem ipsum dolor sit amet
      </AccordionItem>
      <AccordionItem title='AccordionItem2'>
        adipisci sit earum molestiae doloribus quisquam esse quaerat
      </AccordionItem>
      <AccordionItem title='AccordionItem3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eaque ipsam numquam quis, possimus at aspernatur quia,
        adipisci sit earum molestiae doloribus quisquam esse quaerat
        nulla facilis sunt beatae tempora laudantium.
      </AccordionItem>
    </Accordion>
  )
}


export default App;
