import React from "react";

const ContactCard = ({ link, title, icon }) => {
  return (
    <div className="social-icons">
      <a href={link} title={title} target="_blank">
        {icon}
      </a>
    </div>
  );
};

export default ContactCard;
