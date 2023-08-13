import { Link } from 'gatsby';
import React from 'react';



const NavLink = ({ data }) => {
  return (
    <ul className='flex gap-6 text-white capitalize text-xl'>
 {
    data.map((item, i)=>{

        return <Link   
        activeStyle={{ color: "var(--accentColor)" }}
        to={item.path}> <li key={i}>
            {item.label}
        </li></Link>
    })
 }
    </ul>
  );
}

export default NavLink;
