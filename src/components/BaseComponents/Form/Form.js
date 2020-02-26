import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';



const Form = (props) => {
    return (
        <div
            className={`Form__table Form__table--grid ${props.className}`}
        >
            {props.data.map((item, i) => (
                <React.Fragment key={i}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                </React.Fragment>
            ))}
        </div>
    );
};


Form.defaultProps = {
    data: [],
};

Form.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        render: PropTypes.func,
    }))
};

export default Form;
