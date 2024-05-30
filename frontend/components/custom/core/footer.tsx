import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-5 border-t shadow-inner">
      <div className="container text-center">
        <span className="text-sm">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
