import * as React from 'react';
import Wonjong from './components/wonjong';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='wonjong' element={<Wonjong />} />
      {/*여기에 각자 route 처리해서 컴포넌트 넣어주시면 될 것 같아요.*/}
    </Routes>
  );
};

export default App;
