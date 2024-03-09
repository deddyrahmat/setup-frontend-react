import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useEffect } from 'react';
import listen from './redux/listener';

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
