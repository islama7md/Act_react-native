import React from 'react';
import './rn-styles.css';

export const View = ({ style, children, className = '', ...props }) => {
  return (
    <div style={style} className={`rn-view ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Text = ({ style, children, className = '', ...props }) => {
  return (
    <span style={style} className={`rn-text ${className}`} {...props}>
      {children}
    </span>
  );
};

export const TouchableOpacity = ({ style, onPress, children, className = '' }) => {
  return (
    <div style={style} className={`rn-touchable ${className}`} onClick={onPress}>
      {children}
    </div>
  );
};

export const StyleSheet = {
  create: (styles) => styles,
};
