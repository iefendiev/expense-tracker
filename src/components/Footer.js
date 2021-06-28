import React from 'react';
import GitHubMark from '../assets/GitHubMark.png';

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <img className="mr-4 h-12" src={GitHubMark} alt="git-logo" />
      <a
        className=""
        target="_blank"
        rel="noreferrer"
        href="https://github.com/iefendiev/expense-tracker"
      >
        Made by iefendiev
      </a>
    </div>
  );
};

export default Footer;
