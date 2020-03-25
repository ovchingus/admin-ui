import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CloseIcon from '../../../assets/icons/close.svg';

import './Input.scss';

// компонент неконтролирруемый, можно прокинуть 
// value и onChange и если переданы использовать их
const Input = (props) => {

    let [value, setValue] = useState(props.value);

    if (props.value !== undefined && props.onChange !== undefined) {
        value = props.value;
        setValue = props.onChange;
    }

    const closeRef = useRef();
    const [showClose, setShowClose] = useState(false);

    const handleFocus = useCallback(() => setShowClose(true), []);

    const handleChange = useCallback(val => setValue(val), []);

    const handleBlur = useCallback(() => {
        setTimeout(() => {
            setShowClose(false);
            props.onBlur && props.onBlur();
        }, 100)
    });

    const handleClose = useCallback(() => setValue(''), []);

    return (
        <div
            className='Input'
            onBlurCapture={handleBlur}
        >
            <input
                className={cx(
                    'Input__field', {
                    ['Input__editable']: props.editable,
                    ['Input__disabled']: props.disabled,
                },
                )}
                disabled={props.disabled}
                value={value}
                autoFocus={props.autoFocus}
                onFocus={handleFocus}
                onChange={(e) => handleChange(e.target.value)}
                type="text"
                placeholder={props.placeholder}
            />
            <img
                src={CloseIcon}
                ref={closeRef}
                alt="close"
                className={cx('Input__close', {
                    ['Input__close--hide']: !showClose
                })}
                onClick={handleClose}
            />
        </div>
    );
};

Input.propTypes = {
    editable: PropTypes.bool,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    editable: true,
    value: '',
};


export default Input;
