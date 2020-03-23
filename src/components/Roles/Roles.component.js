import React from 'react';

import './Roles.scss';
import { LIST_PERMISSIONS, roles } from './mock'

function resolveAccess(permissions) {
    const { create, read, update, delete: del } = permissions
    if (read && update && del) return 'edit'
    if (read && !create && !update && !del) return 'view'
    if (!read && !create && !update && !del) return 'off'
}

const Roles = (props) => {
    return (
        <div className='Roles'>
            <div className='Roles__header'>
                <div className='Roles__corner'>
                    {'Название роли'}
                </div>
                <div className='Roles__modules'>
                    {LIST_PERMISSIONS.map((p, i) => (
                        <span key={i} className='Roles__modules-col'>{p.name}</span>
                    ))}
                </div>
            </div>
            <div className='Roles__container'>
                <div className='Roles__names'>
                    {roles.map((r, i) => (<span key={i}>{r.name}</span>))}
                </div>
                <div className='Roles__table'>
                    {roles.map((r, i) => (
                        <div key={i} className='Roles__table-col'>
                            {LIST_PERMISSIONS.map((p, i) => (
                                <div className='Roles__table-cell Roles__crud' key={i}>
                                    <button data-active={resolveAccess(r.permissions[p.field])} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    actions
                </div>
            </div>
        </div>
    );
};


export default Roles;
