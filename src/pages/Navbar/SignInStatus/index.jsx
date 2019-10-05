import React from 'react';
import { Icon, Label, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SignInStatus = (props) => {
  const options = [
    { key: 1, text: 'Редактировать', value: 1 },
    { key: 2, text: 'Оставить заметку', value: 2 },
    { key: 3, text: 'Выйти', value: 3 },
  ];
  return (
    <Label className={`${props.className}Label`}>
      <Icon name="user" size="big" className={`${props.className}Label-Icon`} />
      <Dropdown text="Anton" options={options} simple item className={`${props.className}Label-Dropdown`} />
    </Label>
  );
};

SignInStatus.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SignInStatus;
