import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default ({ props }) => (
  <SyntaxHighlighter language="javascript" stylesheet="docco">{props}</SyntaxHighlighter>
);
