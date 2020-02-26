import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import roleRightsConfig from '../../config/roleRights';
import { roleRightsSelectors } from '../../store/selectors';

const RoleRoute = ({ role, ...props }) => {
    const roleInfo = roleRightsConfig[role] || {};

    if (roleInfo.links && roleInfo.links.find(l => l.url === props.path)) {
        return (
            <Route {...props}>
                {props.children}
            </Route>
        );
    }

    return <Redirect to='/auth' />;
};

RoleRoute.propTypes = {
    role: PropTypes.string,
};

const mapStateToProps = (state) => ({
    role: roleRightsSelectors.role(state),
});

export default connect(mapStateToProps)(RoleRoute);
