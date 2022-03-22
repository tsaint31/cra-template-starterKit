import { Link } from 'react-router-dom';
import { VtmnButton, VtmnIcon } from '@vtmn/react';
import { EnvRibbon } from './EnvRibbon';

export const Home = () => {
  return (
    <>
      <div className="App Card">
        {window.ENVIRONMENT !== 'prod' && <EnvRibbon />}
        <header>
          <p className="vtmn-typo_display-2">CRA TEMPLATE STARTER KIT</p>
          <p className="vtmn-typo_title-3">
            You succeed to install the Create React App Starter Kit !!!
          </p>
          <p className="vtmn-typo_text-3">
            We install for you React Router Dom, check the page{' '}
            <strong>NAVIGATION</strong> to see the pages navigation.
          </p>
          <p className="vtmn-typo_text-3">
            We install for you some packages see the <strong>ABOUT</strong> page
            to check the list of packages.
          </p>
          <p className="App-vitamin vtmn-typo_text-3">
            We install also vitamin css to use Wonderful Color,
          </p>
          <p className="App-vitamin vtmn-typo_text-3">Vitamin typography,</p>
          <div className="App-icon">
            <VtmnIcon
              color="brand-digital"
              size={24}
              value="message-line"
              variant="default"
            />{' '}
            <VtmnIcon
              color="brand-digital"
              size={24}
              value="calendar-2-line"
              variant="default"
            />
            <p className="App-vitamin vtmn-typo_text-3">and Vitamin icons</p>
            <VtmnIcon
              color="brand-digital"
              size={24}
              value="heart-line"
              variant="default"
            />
            <VtmnIcon
              color="brand-digital"
              size={24}
              value="home-line"
              variant="default"
            />
          </div>
        </header>
        <body className="App-body">
          <Link to="/about">
            <VtmnButton>About</VtmnButton>
          </Link>
          <Link to="/navigation">
            <VtmnButton>Navigation</VtmnButton>
          </Link>
        </body>
      </div>
    </>
  );
};
