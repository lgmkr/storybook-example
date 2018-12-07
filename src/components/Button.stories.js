import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from '../utils';
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
.addWithJSX('with yellow background', wInfo(`
description

~~~js
<Button>slkdjslkdj</Button>
~~~
`)(() => <Button bgColor="yellow">Hello World</Button>))
.addWithJSX('with green background', withInfo()(() => <Button bgColor="green">Hello World</Button>))
