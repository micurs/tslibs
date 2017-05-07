import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Test, MyInput } from 'module-a';

const a: Test = 'option1';
// const b : Test = 'optionB';

ReactDOM.render(<div>
    <h2>Welcome to React!</h2>
    <h3>We are coding in TypeScript</h3>
    <MyInput id="myInput" label="My Input" value="" />
  </div>, document.getElementById('app') );
