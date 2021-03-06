// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../shared/Button';

import { device } from '../../theme';
import { AppProvider as Provider, AppConsumer } from '../../providers';

import { IC_FACEBOOK_W_SRCSET, IC_FACEBOOK_W, IC_GOOGLE_W } from '../../utils/Icons';

import type {
  User,
} from '../../types';
import type { State as AppState } from '../../providers/AppProvider';

import { getString } from '../../../STRINGS';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: ${(props) => props.theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    max-width: 768px;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 400px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  flex-direction: column;

  @media ${device.mobileS} {
    bottom: 40px;
    width: 85vw;
    align-self: center;
  }

  @media ${device.tablet} {
    width: 50vw;
    right: 60px;
    align-self: center;
    top: 400px;
  }
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-family: sans-serif;
  color: #e3e3e3;
`;

type Props = {
  history: any,
  store: any,
}

type State = {
  isLoggingIn: boolean,
};

class Intro extends Component<Props, State> {
  timer: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggingIn: false,
    };
  }

  render() {
    return (
      <AppConsumer>
        {
          (data) => {
            return (
              <Container>
                <ContentWrapper>
                  <Text>{data.state.user.displayName}</Text>
                  <Text>{data.state.user.age ? data.state.user.age : ''}</Text>
                  <Text>{data.state.user.job}</Text>
                </ContentWrapper>
                <ButtonWrapper>
                  <Button
                    id='btn'
                    imgSrc={IC_GOOGLE_W}
                    isLoading={this.state.isLoggingIn}
                    onClick={() => this.onLogin(data)}
                    // white={true}
                    text={getString('LOGIN')}
                  />
                  <Button
                    id='btn'
                    onClick={() => this.navigate()}
                    white={true}
                    text={getString('NAVIGATE')}
                  />
                </ButtonWrapper>
              </Container>
            );
          }
        }
      </AppConsumer>
    );
  }

  onLogin = (data: AppState) => {
    data.actions.resetUser();
    this.setState({ isLoggingIn: true }, () => {
      this.timer = setTimeout(() => {
        const user: User = {
          displayName: 'dooboolab',
          age: 30,
          job: 'developer',
        };
        data.actions.setUser(user);
        this.setState({ isLoggingIn: false });
      }, 1000);
    });
  }

  navigate = () => {
    const location: Object = {
      pathname: '/404',
      state: {},
    };
    // this.props.history.replace(location);
    this.props.history.push(location);
  }
}

export default Intro;
