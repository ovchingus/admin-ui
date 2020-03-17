import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './Participants.scss';


const ParticipantsTable = (props) => {
    return (
        <div className='Participants__table'>
            {props.columns.map((col, i) => (
                <span key={i} className='Participants__table-header Participants__table-cell'>
                        {col.name}
                    </span>
            ))}

            {props.data.map((u, j) => props.columns.map((col, i) => (
                <span
                    key={`${j}_${i}`}
                    className='Participants__table-cell'
                    onClick={() => props.onRowClick(u)}
                >
                        {col.render ? col.render(u) : u[col.field]}
                    </span>
            )))}
        </div>
    );
};

ParticipantsTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        patronymic: PropTypes.string,
        organization: PropTypes.string,
        position: PropTypes.string,
        role: PropTypes.string,
    })),
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        field: PropTypes.string,
        render: PropTypes.func,
    })),
    onRowClick: PropTypes.func,
};
ParticipantsTable.defaultProps = {
    data: [],
    columns: [],
    onRowClick: f => f,
};


export default ParticipantsTable;
