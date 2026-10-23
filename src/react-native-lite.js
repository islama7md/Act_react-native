import React from 'react';
import './rn-styles.css';

export const View = ({ style, children, className = '', ...props }) => {
  return React.createElement(
    'div',
    { style, className: `rn-view ${className}`, ...props },
    children
  );
};

export const Text = ({ style, children, className = '', ...props }) => {
  return React.createElement(
    'span',
    { style, className: `rn-text ${className}`, ...props },
    children
  );
};


export const TouchableOpacity = ({ style, onPress, children, className = '' }) => {
  return React.createElement(
    'div',
    { style, className: `rn-touchable ${className}`, onClick: onPress },
    children
  );
};

export const StyleSheet = {
  create: (styles) => styles,
};
