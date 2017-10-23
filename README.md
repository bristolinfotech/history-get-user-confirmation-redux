history-get-user-confirmation-redux
===================================

> Redux integration for history getUserConfirmation

Installation
------------

```
yarn add @bristolinfotech/history-get-user-confirmation-redux
```

Usage
-----

#### Store Integration

```js
// store creation

import createBrowserHistory from 'history/createBrowserHistory';
import {
  createHistoryGetUserConfirmationConnector,
  historyGetUserConfirmationHandler,
  createHistoryGetUserConfirmationMiddleware,
  historyGetUserConfirmationReducer,
} from '@bristolinfotech/history-get-user-confirmation-redux';

// connector will link history to middleware
const historyGetUserConfirmationConnector = createHistoryGetUserConfirmationConnector();

// add the handler to history getUserConfirmation
export const history = createBrowserHistory({
  getUserConfirmation: historyGetUserConfirmationHandler(historyGetUserConfirmationConnector),
});

// create the middleware passing it the connector
const historyGetUserConfirmationMiddleware = createHistoryGetUserConfirmationMiddleware(
  historyGetUserConfirmationConnector,
);

// add the reducer and middleware to your store
const store = createStore(
  historyGetUserConfirmationReducer,
  applyMiddleware(historyGetUserConfirmationMiddleware),
);
```

#### Example Confirmation Component

```js
// custom confirmation component

import { connect } from 'react-redux';
import {
  historyGetUserConfirmationReject,
  historyGetUserConfirmationAccept,
} from '@bristolinfotech/history-get-user-confirmation-redux';

const MyConfirmationComponent = (props) => {
  if (this.props.active) {
    return (
      <div>
        {this.props.message}
        <br />
        <button onClick={this.props.historyGetUserConfirmationReject}>Cancel</button>
        <button onClick={this.props.historyGetUserConfirmationAccept}>Confirm</button>
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  active: state.historyGetUserConfirmation.active,
  message: state.historyGetUserConfirmation.message,
});

const mapDispatchToProps = (dispatch) => ({
  historyGetUserConfirmationAccept: () => dispatch(historyGetUserConfirmationAccept()),
  historyGetUserConfirmationReject: () => dispatch(historyGetUserConfirmationReject()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyConfirmationComponent);
```
