import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';
import Input from '../Input';



const Form = (props) => {
    return (
        <div
            className={`Form__table Form__table--grid ${props.className}`}
        >
            {props.data.map((item, i) => (
                <React.Fragment key={i}>
                    <span><div>{item.label}</div></span>
                    <Input
                        editable={!item.disabled}
                        disabled={item.disabled}
                        placeholder={item.placeholder}
                        value={item.value}
                    />
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
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        render: PropTypes.func,
    }))
};

export default Form;
