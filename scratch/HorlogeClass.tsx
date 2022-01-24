import React from 'react';

interface State {
  heure: number;
}

interface Props {
  size: number;
  onTimeChange?: (time: number) => void;
}

export class HorlogeClass extends React.Component<Props, State> {
  private interval: any;

  constructor(props: Props) {
    super(props);
    this.state = { heure: Date.now() };
  }

  public render() {
    const now = this.state.heure;
    const formatNow = now.toString().substr(-this.props.size);

    return <div> {formatNow} </div>;
  }

  public componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public updateTime() {
    const now = Date.now();
    this.setState({ heure: now });
    this.props.onTimeChange && this.props.onTimeChange(now);
  }
}
