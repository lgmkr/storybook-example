import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
