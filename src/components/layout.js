import React from "react";
import { Link } from "gatsby";
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);
export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Waffle Down</h3>
      </Link>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/about">About</ListLink>
      </ul>
    </header>
    {children}
  </div>
);
