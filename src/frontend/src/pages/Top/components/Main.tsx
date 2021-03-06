import * as React from 'react';
import { useState, Dispatch, SetStateAction } from 'react';
import * as styles from './scss/main.scss';

const getBodyListElms = (timeLineDataLists: Array<Record<string, any>>): Array<JSX.Element> => {
    return timeLineDataLists.map((timeLineDataList: Record<string, any>, key: number) => (
        <li className={styles.media} key={key}>
            <div className={styles.displayFlex}>
                <div className={styles.media__body__left}>
                    <img src={timeLineDataList[key].img} alt="" />
                </div>
                <strong className={styles.media__text__success}>
                    {timeLineDataList[key].user}
                    <br />
                    {timeLineDataList[key].user_id}
                </strong>
            </div>
            <div className={styles.media__body}>
                <p className={styles.media__text}>{timeLineDataList[key].text}</p>
                <span className={styles.media__text__muted}>
                    <small>{timeLineDataList[key].time_stamp}</small>
                </span>
            </div>
        </li>
    ));
};

const Main = (): JSX.Element => {
    const [update, updateState]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const stateValueUpdate = (): void => {
        if (update) {
            updateState(0);
        } else {
            updateState(1);
        }
    };
    return (
        <main className={styles.timeLine}>
            <ul>{getBodyListElms([])}</ul>
        </main>
    );
};

export { Main };
