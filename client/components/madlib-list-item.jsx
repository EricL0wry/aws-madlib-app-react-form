import React from 'react';

export default function MadlibListItem(props) {
  const { madLibId, madLibName } = props.madlib;
  return (
    <div className="col-12">
      <h4>{madLibName}</h4>
      <button
        type="button"
        className="btn select-button"
        onClick={() => props.setView('madlibForm', { id: madLibId })}
      >
        Select
      </button>
    </div>
  );
}
