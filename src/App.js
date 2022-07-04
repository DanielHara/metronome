import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [numberOfBeats, setNumberOfBeats] = useState(4);
  const [beatsPerMinute, setBeatsPerMinute] = useState(120);
  const [active, setActive] = useState(0);

  const interval = useRef(null);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    console.log(`numberOfBeats = ${numberOfBeats}`);
    console.log(`beatsPerMinute = ${beatsPerMinute}`);

    interval.current = setInterval(() => setActive(active => (active + 1) % numberOfBeats), 60 / beatsPerMinute * 1000);
  }, [numberOfBeats, beatsPerMinute]);

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

      <label for="bpm">
        Beats per Minute
      </label>
      <input id="bpm" onChange={(event) => {
        const number = Number(event.target.value)
        
        if (number > 0) {
          setBeatsPerMinute(number);
        }
      }} />

      <button onClick={handleStopClick}>
        STOP
      </button>
    </div>
  );
}

export default App;
