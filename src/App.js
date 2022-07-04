import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [numberOfBeats, setNumberOfBeats] = useState(4);
  const [beatsPerMinute, setBeatsPerMinute] = useState(120);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setInterval(() => setActive(active => (active + 1) % numberOfBeats), 60 / beatsPerMinute * 1000);
  }, []);

  const handleStopClick = () => {}

  return (
    <div className={styles.App}>
      Metronome
      <div className={styles.metronome}>

        <div className={styles.bar}>
          {[...Array(numberOfBeats).keys()].map(index => <div className={clsx(styles.item, index === active && styles.active)} key={index}>
            </div>)}
        </div>
      </div>

      <button onClick={handleStopClick} >
        STOP
      </button>
    </div>
  );
}

export default App;
