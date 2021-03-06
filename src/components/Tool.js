import React from 'react';
import styled from 'styled-components';
import languages from '../translate/languages';
import { Translate } from 'react-i18nify';

const Tool = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 13px;

    .item {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);

        .value {
            display: flex;
            align-items: center;
            select {
                outline: none;
                margin-left: 15px;
            }
            button {
                height: 25px;
                border: none;
                padding: 0 10px;
                margin-left: 15px;
                outline: none;
                cursor: pointer;
                font-size: 12px;
                color: #fff;
                border-radius: 3px;
                background-color: rgb(26, 83, 109);
                transition: all 0.2s ease;
                &:hover {
                    color: #fff;
                    background-color: #2196f3;
                }
                i {
                    margin-right: 5px;
                }
            }
        }
    }
`;

export default function({ language, options, setOption, translateSubtitles, timeOffsetSubtitles, addSubtitlesEvent }) {
    return (
        <Tool>
            <div className="item">
                <div className="title">
                    <Translate value="google-translate" />
                </div>
                <div className="value">
                    <select
                        value={options.translationLanguage}
                        onChange={event => setOption({ translationLanguage: event.target.value })}
                    >
                        {(languages[language] || languages.en).map(item => (
                            <option key={item.key} value={item.key}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => translateSubtitles()}>
                        <Translate value="confirm" />
                    </button>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <Translate value="time-offset" />
                </div>
                <div className="value">
                    <button onClick={() => timeOffsetSubtitles(-0.1)}>-100ms</button>
                    <button onClick={() => timeOffsetSubtitles(0.1)}>+100ms</button>
                    <button onClick={() => timeOffsetSubtitles(-1)}>-1000ms</button>
                    <button onClick={() => timeOffsetSubtitles(1)}>+1000ms</button>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <Translate value="add event" />
                </div>
                <div className="value">
                    <button onClick={() => addSubtitlesEvent('Event 1')}>
                        <Translate value="Event 1" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 2')}>
                        <Translate value="Event 2" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 3')}>
                        <Translate value="Event 3" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 4')}>
                        <Translate value="Event 4" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 5')}>
                        <Translate value="Event 5" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 6')}>
                        <Translate value="Event 6" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 7')}>
                        <Translate value="Event 7" />
                    </button>
                    <button onClick={() => addSubtitlesEvent('Event 8')}>
                        <Translate value="Event 8" />
                    </button>
                </div>
            </div>
        </Tool>
    );
}
