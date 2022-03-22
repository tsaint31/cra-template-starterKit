import { Link } from 'react-router-dom';
import { VtmnButton } from '@vtmn/react';

export const About = () => {
  return (
    <>
      <div className="About">
        <Link to="/">
          <VtmnButton iconLeft="arrow-left-line">Home</VtmnButton>
        </Link>
      </div>
      <div className="Card">
        <p className="vtmn-typo_text-2">
          This starter kit install above the CRA the following component :
        </p>
        <ul className="vtmn-typo_text-3">
          <li>SASS</li>
          <li>Eslint</li>
          <li>Prettier</li>
          <li>Typescript</li>
          <li>React Router Dom</li>
          <li>Testing-Library</li>
          <li>CommitLint</li>
          <li>Vitamin css-design-tokens</li>
          <li>Vitamin css utilities</li>
          <li>Vitamin Icon</li>
          <li>Vitamin React</li>
        </ul>
        <p className="vtmn-typo_text-2">
          <a
            href="https://wiki.decathlon.net/display/CREATION/React+front+end+stack"
            target="_blank"
            rel="noreferrer"
          >
            This is based on the React Front end stack wiki page.
          </a>
        </p>
      </div>
    </>
  );
};
