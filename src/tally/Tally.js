import React from 'react';
import TallyItem from './TallyItem';

const Tally = ({
  items = [],
  onAddClick,
  onRemoveClick
}) =>
  <div>
    <div className="alert alert-info">
      <strong>TALLY! </strong>
      Tally is a record of amounts or numbers which you keep
      changing and adding to as the activity which affects it
      progresses.
    </div>
    {items.map(counter =>
      <TallyItem
        key={counter.id}
        {...counter}
        onAddClick={onAddClick.bind(this, counter.id)}
        onRemoveClick={onRemoveClick.bind(this, counter.id)}
      />
    )}
  </div>;

export default Tally;