import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './IconButton.scss';


const IconButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={cx('IconButton', props.className)}
            data-icon={props.icon}
        />
    );
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOf([
        'access-view',
        'access-off',
        'access-edit',
        'add',
        'remove',
        'add-special'
    ]),
};

export default IconButton;
