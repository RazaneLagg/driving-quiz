import React from 'react';
import { Link } from "react-router-dom";
import '../styles/searchresult.css';

const ResultItem = ({ item }) => (
   <Link to="/schoolprofile">
  <div className="result-item-billel" data-category={item.category}>
    <img src={item.image} alt={item.name} className="profile-pic-billel" />
    <div className="content-billel">
      <h3>{item.name}</h3>
      <p className="role-billel">{item.role}</p>
      <p className="expertise-billel">{item.expertise}</p>
      <p className="school-billel">{item.school}</p>
    </div>
  </div>
  </Link>
);
export default ResultItem;