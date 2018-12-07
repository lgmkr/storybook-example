import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from '../utils';
import { withInfo } from '@storybook/addon-info';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
.addWithJSX('with yellow background', wInfo(`
description

~~~js
<Button>slkdjslkdj</Button>
~~~
`)(() => <Button bgColor="yellow">Hello World</Button>))
.addWithJSX('with green background', withInfo()(() =>
  <Button disabled={boolean('disabled', false)}>
    {text('text', 'Hello world')}
  </Button>
))
