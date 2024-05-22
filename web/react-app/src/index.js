import ReactDOM from 'react-dom';
import { App } from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>
);