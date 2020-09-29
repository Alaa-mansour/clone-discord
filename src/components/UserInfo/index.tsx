import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, SettingsIcon, HeadphoneIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Guilherme Rodz</strong>
                    <span>#2832</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
};

export default UserInfo;