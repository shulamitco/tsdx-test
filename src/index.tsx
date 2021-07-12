import * as React from 'react';

// Import react-circular-progressbar module and styles
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// import './index.css';
//create new 3 components 1. percentage , number, number with header*2
interface I2values {
  value1: number;
  value2: number;
  title1: string;
  title2: string;
}
interface I1value {
  value: number;
}
interface IPercentage {
  value: number;
}
interface ILimit {
  color: string;
  limit: number;
}

interface IProgressBarProps {
  borderEnum: number; //colored or regular
  typeEnum: number; //
  values: I2values | I1value | IPercentage | any;
  text?: string;
  isFullProgress: boolean;
  limits: ILimit[];
}
const ProgressBar = (props: IProgressBarProps) => {
  const { borderEnum, typeEnum, values, text, isFullProgress } = props;
  const REGULAR_BORDER = 1;
  const PERCENTAGE = 4;
  const CHART_2_VALUES = 2;
  return (
    <div className="progressbar">
      <CircularProgressbarWithChildren
        value={100}
        strokeWidth={0.6}
        className="borderRing"
      >
        <div style={{ width: '93%' }}>
          <CircularProgressbarWithChildren
            className={'classColorGreen'}
            value={
              !isFullProgress && typeEnum === PERCENTAGE ? values.value : 100
            }
            strokeWidth={REGULAR_BORDER === borderEnum ? 0 : 5}
            styles={{
              root: { filter: ' drop-shadow(0 0 0.2rem black)' },
            }}
          >
            <div style={{ width: '90%' }}>
              <div className="row">
                {typeEnum === CHART_2_VALUES ? (
                  <div className="row">
                    <div className="column ">
                      <div className="row value">{values.value1}</div>
                      <div className="row title">{values.title1}</div>
                    </div>
                    <div className="column">
                      <div className="row value">:</div>
                    </div>
                    <div className="column">
                      <div className="row value">{values.value2}</div>
                      <div className="row title">{values.title2}</div>
                    </div>
                  </div>
                ) : (
                  <div className="row value">{`
                  ${values.value}${typeEnum === PERCENTAGE ? '%' : ''}`}</div>
                )}
              </div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </CircularProgressbarWithChildren>
      {text ? <div className="row title">{text}</div> : null}
    </div>
  );
};

export default ProgressBar;
