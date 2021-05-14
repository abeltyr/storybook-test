import React from 'react';
import PropTypes from 'prop-types';
// import './button.css';
import { StorybookButton } from './style';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, backgroundColor = null, size, label, ...props }) => {
    return (
        <StorybookButton
            type="button"
            primary={primary}
            size={size}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </StorybookButton>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
