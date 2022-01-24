import React, { useEffect, useState } from 'react';

interface Props {
  size: number;
  onTimeChange?: (time: number) => void;
}

export function HorlogeFunctional(props: Props) {
  const [now, setNow] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now();
      setNow(time.toString().substr(-props.size));
      props.onTimeChange && props.onTimeChange(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.size]);

  return <div> {now} </div>;
}
