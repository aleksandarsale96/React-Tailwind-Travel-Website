import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectCard from './SelectCard';

const Select = () => {
  return (
    // za male ekrane 2 red,za velike ekrane 3 reda
    <div className='max-w-[1240] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        
      <SelectCard bg={BoraBora} text='BoraBora'/>
      <SelectCard bg={Maldives} text='Maldives'/>
      <SelectCard bg={KeyWest} text='KeyWest'/>
      <SelectCard bg={Maldives2} text='Maldives2'/>
      <SelectCard bg={BoraBora2} text='BoraBora2'/>
      <SelectCard bg={BoraBora} text='Greece'/>
        
    </div>
  )
}

export default Select