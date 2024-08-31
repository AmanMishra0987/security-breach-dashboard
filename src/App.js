import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import TablePage from './pages/TablePage';
import PieChartsPage from './pages/PieChartsPage';
import 'antd/dist/reset.css'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/charts" element={<PieChartsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
