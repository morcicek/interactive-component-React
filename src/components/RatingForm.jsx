import React, { useState } from 'react';

const RatingForm = ({ select, onSubmit }) => {
  const [selected, setSelected] = useState(5);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex justify-content-center gap-4">
        {/* <input
          type="radio"
          className="btn-check"
          name="options-base"
          id="option5"
          autocomplete="off"
          value={1}
          checked={selected}
          onChange={(e) => console.log(e.target.value)}
        />
        <label className="text-center circle" htmlFor="option5">
          1
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options-base"
          id="option6"
          autocomplete="off"
        />
        <label className="text-center circle" for="option6">
          2
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options-base"
          id="option7"
          autocomplete="off"
        />
        <label className="text-center circle" for="option7">
          3
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options-base"
          id="option8"
          autocomplete="off"
        />
        <label className="text-center circle" for="option8">
          4
        </label>
        <input
          type="radio"
          className="btn-check"
          name="options-base"
          id="option9"
          autocomplete="off"
        />
        <label className="text-center circle" for="option9">
          5
        </label> */}
        {Array.from({ length: 5 }, (_, i) => (
          <>
            <input
              type="radio"
              className="btn-check"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label className="text-center circle" htmlFor={`num${i + 1}`}>
              {i + 1}
            </label>
          </>
        ))}
      </div>
      <button type="submit" className="btn primary d-block mt-3 w-100 radius">
        SUBMIT
      </button>
    </form>
  );
};

export default RatingForm;
