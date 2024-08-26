import React, { useState } from 'react';

const AccordionItem = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
        <div className="accordion-header" onClick={toggleOpen}>
          <img src={experience.logo} alt={`${experience.company} logo`} className="logo-image" />
          <div className="accordion-title">{experience.title}</div>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p className="location">{experience.location}</p>
            <ul className="details">
              {experience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
              <div className="tags">
                {experience.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    );
  };

export default AccordionItem;