import React from 'react';
import PropTypes from 'prop-types';
import { Header, Center, ImageDisplay } from './style';

// import { Button } from '../button';

export const Profile = ({ ImageSrc }) => (
    <Header>
        <Center>
            <ImageDisplay src={ImageSrc} width="100%" height="100%" />

        </Center>
    </Header>
);

Profile.propTypes = {
    ImageSrc: PropTypes.string,
    // onLogin: PropTypes.func.isRequired,
    // onLogout: PropTypes.func.isRequired,
    // onCreateAccount: PropTypes.func.isRequired,
};

Profile.defaultProps = {
    src: "https://source.unsplash.com/random",
};
