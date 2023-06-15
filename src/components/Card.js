import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{card.name}</h3>
        <span>{card.budget_name}</span>
      </div>
      <div className="card-body">
        <div className="card-info">
          <div>
            <h4>Spent</h4>
            <p>
              {card.spent.value} {card.spent.currency}
            </p>
          </div>
          <div>
            <h4>Available to spend</h4>
            <p>
              {card.available_to_spend.value} {card.available_to_spend.currency}
            </p>
          </div>
        </div>
        <div className="card-details">
          <div>
            <h4>Card Type</h4>
            <p>{card.card_type}</p>
          </div>
          <div>
            <h4>Expiry</h4>
            <p>{card.expiry}</p>
          </div>
          <div>
            <h4>Limit</h4>
            <p>{card.limit}</p>
          </div>
          <div>
            <h4>Status</h4>
            <p>{card.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
