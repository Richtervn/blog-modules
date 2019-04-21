import './WordResolver.css';

import React, { useState } from 'react';
import PageContainer from 'common/PageContainer';
import WordResolver from './WordResolver';

const wordResolver = new WordResolver();

export default () => {
  const [state, setState] = useState({
    characters: [],
    worldLength: '',
    result: [],
    isSearching: false
  });

  const handleSearch = () => {
    console.log('running');
    setTimeout(() => {
      const result = wordResolver.resolve(
        state.characters.map(c => c.toLowerCase()),
        state.worldLength
      );
      setState({ ...state, result });
    }, 0);
  };

  return (
    <PageContainer backgroundUrl="/images/backgrounds/dark-blue-square.jpg" opacity={5}>
      <div id="word-resolver-page">
        <div className="word-input">
          <form
            className="input-bar"
            onSubmit={e => {
              e.preventDefault();
              handleSearch();
            }}
            onKeyDown={e => {
              if (e.key === 'ArrowUp') {
                setState({ ...state, worldLength: state.worldLength ? state.worldLength + 1 : 1 });
              }
              if (e.key === 'ArrowDown') {
                setState({
                  ...state,
                  worldLength: state.worldLength - 1 <= 0 ? 0 : state.worldLength - 1
                });
              }
              if (e.key === 'Backspace') {
                state.characters.pop();
                setState({ ...state, characters: state.characters.slice(0) });
              }
            }}>
            <input
              type="text"
              value=""
              placeholder="Type any letter"
              autoFocus
              onChange={e => {
                state.characters.push(e.target.value);
                setState({ ...state, characters: state.characters.slice(0) });
              }}
            />
            <input
              type="number"
              value={state.worldLength}
              placeholder="Length"
              onChange={e => {
                setState({ ...state, worldLength: parseInt(e.target.value, 10) });
              }}
            />
            <button className="btn btn-primary" type="button" onClick={() => handleSearch()}>
              <i className="fa fa-search" />
            </button>
          </form>
          <div className="inputed-words">
            {state.characters.map((c, i) => (
              <div
                key={i}
                className="character"
                onClick={() => {
                  state.characters = state.characters.filter((c, j) => j !== i);
                  setState({ ...state, characters: state.characters.slice(0) });
                }}>
                {c}
              </div>
            ))}
          </div>
          {state.characters.length > 0 && (
            <div className="feature" onClick={() => setState({ ...state, characters: [] })}>
              <button className="btn btn-danger">Clear</button>
            </div>
          )}
        </div>
        <div className="found-words">
          <div className="found-words-container">
            {state.result.map((res, i) => (
              <div
                key={i}
                className="result"
                onClick={() => {
                  state.result = state.result.filter((c, j) => j !== i);
                  setState({ ...state, result: state.result.slice(0) });
                }}>
                {res}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
