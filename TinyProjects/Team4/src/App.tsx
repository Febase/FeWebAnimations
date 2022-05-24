import React from 'react';

import { IntroSection } from './components/IntroSection';
import { ScatterSection } from './components/ScatterSection';
import { SpeakerSection } from './components/SpeakerSection';

function App(): React.ReactElement {
  return (
    <div className="App">
      <IntroSection />
      <SpeakerSection />
      <ScatterSection />
    </div>
  );
}

export default App;
