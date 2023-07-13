import React from 'react';
import Blockquote from './Blockquote.js';
import './style.css';

export default function App() {
  return (
    <div>
      {/**
       * A component with an object as a prop, declared with a syntax similar to the one used for HTML's attributes.
       */}
      <Blockquote
        item={{
          quotation:
            'The way to get started is to quit talking and begin doing.',
          author: 'Walt Disney',
          cite: 'https://blog.hubspot.com/sales/famous-quotes',
          source: 'The 100 Most Famous Quotes of All Time',
        }}
      />
      <Blockquote
        item={{
          quotation: 'Be yourself, everyone else is already taken.',
          author: 'Oscar Wilde',
          cite: 'https://www.goodreads.com/quotes',
          source: 'GoodReads',
        }}
      />
      <Blockquote
        item={{
          quotation:
            'If you want to know what God thinks of money, just look at the people he gave it to.',
          author: 'Dorothy Parker',
          cite: 'https://www.rd.com/article/quotes-from-famous-people/',
          source: "Reader's Digest",
        }}
      />
      <Blockquote />
    </div>
  );
}
