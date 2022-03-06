import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {

    const{id} = props.item;

  return (
    <div className="elderon-item-container">
      <div
        className="elderon-img-background"
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      ></div>
      <Link to={`/elderon/${id}`}>Link</Link>
    </div>
  );
}