import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './stores/TodoStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    routing: routingStore,
    todoStore: TodoStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

const unsubscribeFromStore = history.subscribe((location, action) => console.log('route change: ',location.pathname));
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    unsubscribeFromStore();
}

ReactDOM.render(
    <Provider {...stores}>
    <Router basename="/" history={history}>
        <App/>
    </Router >
</Provider>, document.getElementById('root'));
registerServiceWorker();
