import React from 'react';
import PropTypes from 'prop-types';

import { MessageBox } from '../styles/MessageComponentStyles';

const MessageComponent = (props) => {
	return <MessageBox type={props.type}>{props.message}</MessageBox>;
};

MessageComponent.propTypes = {
	type: PropTypes.string,
	message: PropTypes.string
};

export default MessageComponent;