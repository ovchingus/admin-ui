import React, { useCallback, useMemo, useState } from 'react';
import PropTypes, { func } from 'prop-types';

import RightArrowIcon from '../../assets/icons/arrow-right.svg';
import AddIcon from '../../assets/icons/add-icon.svg';

import './Participants.scss';
import ParticipantsTable from './ParticipantsTable.component';
import ParticipantsCard from './ParticipantsCard.component';


const Participants = (props) => {
    const [activeParticipant, setActiveParticipant] = useState();

    const handleChoseParticipant = useCallback((u) => setActiveParticipant(u), []);

    const renderRightArrow = useCallback(() => (<img src={RightArrowIcon} alt="Подробнее" />), []);

    return (
        <div className='Participants'>
            <ParticipantsTable
                data={testData}
                onRowClick={handleChoseParticipant}
                columns={useMemo(() => getTableColumns({ renderRightArrow }), [renderRightArrow])}
            />
            <button className='remove-default-button-styles Participants__add-button small-text'>
                <img src={AddIcon} alt="Добавить нового участника" className='Participants__add-icon' />
                Добавить нового участника
            </button>
            {activeParticipant && (
                <ParticipantsCard
                    info={activeParticipant}
                />
            )}
        </div>
    );
};

function getTableColumns({ renderRightArrow }) {
    return ([
        {
            name: 'Фамилия',
            field: 'lastName',
        },
        {
            name: 'Имя',
            field: 'firstName',
        },
        {
            name: 'Отчество',
            field: 'patronymic',
        },
        {
            name: 'Организация',
            field: 'organization',
        },
        {
            name: 'Должность',
            field: 'position',
        },
        {
            name: 'Роль',
            field: 'role',
        },
        {
            name: '',
            field: '',
            render: renderRightArrow,
        },
    ]);
}

const testData = [
    {
        id: '123',
        lastName: 'Фамилия',
        firstName: 'Имя',
        patronymic: 'Отчество',
        organization: 'Организация',
        position: 'Должность',
        role: 'Роль',
    },
    {
        id: '234',
        lastName: 'Фамилия',
        firstName: 'Имя',
        patronymic: 'Отчество',
        organization: 'Организация',
        position: 'Должность',
        role: 'Роль',
    },
];

Participants.propTypes = {};

export default Participants;
