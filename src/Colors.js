import React from 'react';

import { data } from './colors.json';

const Colors = () => {
  let valueParser;
  let numColors;
  let divs = []



  return (
    <div>
      { data.map((data) => {
        valueParser = JSON.stringify(data.colors);
        // numColors = valueParser.split(",").length;
        return (
          <div>
            <h1>{valueParser}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Colors;