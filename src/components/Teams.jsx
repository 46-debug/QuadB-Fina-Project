import React from 'react';
import TeamsImage from "../assets/Teams.svg";
import { Link } from 'react-router-dom';

const Teams = () => {
  return (
    <Link className='flex items-center justify-center' to="/customers">
      <img src={TeamsImage} alt="" />
    </Link>
  )
}

export default Teams;