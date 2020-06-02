import React from 'react';

export default function MadlibListItem(props) {
  const { madLibId, madLibName } = props.madlib;
  return (
    <div className="d-flex flex-column align-items-center col-12 my-3">
      <h4>{madLibName}</h4>
      <button
        type="button"
        className="btn select-button mt-2"
        onClick={() => props.setView('madlibForm', { id: madLibId })}
      >
        Select
      </button>
    </div>
  );
}
