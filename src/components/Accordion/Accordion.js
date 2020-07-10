import React from 'react';
import s from './Accordion.module.scss'


const Accordion = ({ children }) => {
  return <div className={s.accordion}>{children}</div>
}

export default Accordion