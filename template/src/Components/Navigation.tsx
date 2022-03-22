import { Link, Outlet } from 'react-router-dom';
import { VtmnButton } from '@vtmn/react';

export const Navigation = () => {
  return (
    <div>
      <div className="About">
        <Link to="/">
          <VtmnButton iconLeft="arrow-left-line">Home</VtmnButton>
        </Link>
      </div>
      <div className="Card">
        <p className="vtmn-typo_text-1">
          With React-router-dom, <strong>you can manage several route</strong>{' '}
          for your application.
        </p>
        <p className="vtmn-typo_text-2">
          As for instance here with Home, About and Navigation pages
        </p>
        <p className="vtmn-typo_text-2">
          and you can even manage several routes inside a page as below by
          selected a component.
        </p>
        <body className="App-body">
          <Link to={`first`}>
            <VtmnButton variant="secondary">My First Component</VtmnButton>
          </Link>
          <Link to={`second`}>
            <VtmnButton variant="secondary">My Second Component</VtmnButton>
          </Link>
        </body>
        <Outlet />
      </div>
    </div>
  );
};
