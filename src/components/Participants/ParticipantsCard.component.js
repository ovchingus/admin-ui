import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/icons/close.svg';

import './Participants.scss';
import Form from '../BaseComponents/Form';


const ParticipantsCard = (props) => {
    return (
        <div className='Participants__card'>
            <img src={CloseIcon} alt="close" className='Participants__card-close' />
            <Form
                data={testData}
            />
        </div>
    );
};

const testData = [
    {
        label: 'Фамилия',
        type: 'input',
        value: 'Иванов',
    },
    {
        label: 'Имя',
        type: 'input',
        value: 'Иван',
    },
    {
        label: 'Отчество',
        type: 'input',
        value: 'Иванович',
    }, {
    label: 'Оргиназация',
    type: 'select',
    options: [{
        title: 'МСУ-1 АО',
        value: 'МСУ-1 АО',
    }, {
        title: 'МСУ-2 АО',
        value: 'МСУ-2 АО',
    }, {
        title: 'МСУ-3 АО',
        value: 'МСУ-3 АО',
    }],
    value: {
        title: 'МСУ-1 АО',
        value: 'МСУ-1 АО',
    },
}];

ParticipantsCard.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.string,
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        patronymic: PropTypes.string,
        organization: PropTypes.string,
        position: PropTypes.string,
        role: PropTypes.string,
    }),
};
ParticipantsCard.defaultProps = {
    info: {},
};


export default ParticipantsCard;
