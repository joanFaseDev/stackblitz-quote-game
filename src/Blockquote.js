// Blockquote.js

import React from 'react';

export default function Blockquote({
  item = {
    quotation: 'No quotation provided for this quote.',
    cite: 'No cite provided for this quote',
    author: 'No author provided for this quote',
    source: 'No source provided for this quote.',
  },
}) {
  // item can be used here
  return (
    <figure className="figure">
      <blockquote className="blockquote" cite={item.cite}>
        <p className="quotation">{item.quotation}</p>
      </blockquote>
      <figcaption className="author">
        {item.author}, <cite className="quotation-source">{item.source}</cite>
      </figcaption>
    </figure>
  );
}
