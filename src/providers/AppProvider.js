import React, { createContext } from 'react';
import { AppContext } from '../contexts';
import type { User } from '../types';

const AppConsumer = AppContext.Consumer;

type Props = { };
export type State = {
  user: User,
};

const initialState: State = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

class AppProvider extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  actions = {
    setUser: (user: User) => {
      this.setState({
        user,
      });
    },
    resetUser: () => {
      this.setState({
        user: initialState.user,
      });
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppConsumer, AppProvider };