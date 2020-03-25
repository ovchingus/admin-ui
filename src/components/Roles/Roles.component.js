import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import IconButton from '../BaseComponents/IconButton'
import Input from '../BaseComponents/Input'
import './Roles.scss';

const buildRole = (modules) => {
  const role = {
    name: '',
    permissions: {}
  }
  for (const module of modules) {
    role.permissions[module.field] = { create: false, read: true, update: false, delete: false }
  }
  return role
}

const resolveAccess = (permissions) => {
  const { create: c, read: r, update: u, delete: d } = permissions;
  if (c && r && u && d) return 'access-edit';
  if (!c && r && !u && !d) return 'access-view';
  if (!c && !r && !u && !d) return 'access-off';
}




function Roles(props) {

  useEffect(() => {
    props.fetchRoles();
    props.fetchModules();
  }, []);

  const [newRole, setNewRole] = useState(null);
  const [newRoleName, setNewRoleName] = useState('');

  const handleAddRole = () => !isCopyMode && setNewRole({ ...buildRole(props.modules) });
  const handleCopyRole = (role) => setNewRole({ ...role, name: '' });

  const handleChangePermission = (role, module) => props.setPermission({ role, module });
  const handleRemoveRole = (role) => props.removeRole({ role });

  const handleInputBlur = (role) => {
    if (newRoleName !== '') {
      props.addRole({ role: { ...newRole, name: newRoleName } });
    }
    setNewRole(null);
    setNewRoleName('');
  }

  const [isCopyMode, setIsCopyMode] = useState(false);

  const handleToggleCopyMode = () => setIsCopyMode(!isCopyMode)

  const handleAddRoleCopyMode = (role) => {
    isCopyMode && handleCopyRole(role)
    setIsCopyMode(false)
  }

  function RolesRow(props) {
    return (
      <div className='Roles__wrapper'>
        {props.rows.map((r, i) => (
          <div
            key={i}
            className={cx('Roles__row', {
              ['Roles__row--copy']: isCopyMode
            })}
            onClick={() => handleAddRoleCopyMode(r)}
          >
            <div className='Roles__row-name'>
              {r.name === '' ? (
                <Input
                  autoFocus
                  value={newRoleName}
                  onChange={setNewRoleName}
                  onBlur={() => handleInputBlur(r)}
                />
              ) : (
                  <span>{r.name}</span>
                )}
            </div>
            <div className='Roles__row-buttons'>
              {props.cols.map((p, i) => (
                <IconButton
                  key={i}
                  className='Roles__button'
                  icon={resolveAccess(r.permissions[p.field])}
                  onClick={() => handleChangePermission(r.name, p.field)}
                />
              ))}
            </div>
            <div className='Roles__row-actions'>
              <IconButton
                onClick={() => handleCopyRole(r)}
                className='Roles__button'
                icon='add-special'
              />
              <IconButton
                onClick={() => handleRemoveRole(r.name)}
                className='Roles__button'
                icon='remove'
              />
            </div>
          </div>))}
      </div>
    )
  }

  return (
    <div className='Roles'>
      <div className='Roles__header'>
        <div className='Roles__header-title'>Название роли</div>
        <div className='Roles__header-modules'>
          {props.modules.map((p, i) => (
            <span key={i}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
      <div className='Roles__body'>
        <RolesRow
          rows={props.roles}
          cols={props.modules}
        />
        {newRole && (
          <RolesRow
            rows={[newRole]}
            cols={props.modules}
          />
        )}
      </div>
      <div className='Roles__add'>
        <div className='Roles__add-row' onClick={handleAddRole}>
          <IconButton className='Roles__button' icon='add' />
          <span className='Roles__row-add'>
            Добавить новую роль
          </span>
        </div>
        <div
          className={cx('Roles__add-row', {
            ['Roles__add-row--copy']: isCopyMode
          })}
          onClick={handleToggleCopyMode}
        >
          <IconButton
            className='Roles__button'
            icon='add-special'
          />
          <span className='Roles__row-add'>
            Создать новую роль на основе существующей
          </span>
        </div>
      </div>
    </div>
  );
};

export default Roles;
