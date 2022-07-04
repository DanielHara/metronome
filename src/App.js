import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [numberOfBeats, setNumberOfBeats] = useState(4);
  const [beatsPerMinute, setBeatsPerMinute] = useState(120);
  const [active, setActive] = useState(0);

  return (
    <div className={styles.App}>
      Metronome
      <div className={styles.metronome}>

        <div className={styles.bar}>
          {[...Array(numberOfBeats).keys()].map(index => <div className={styles.item} key={index}>
            </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
