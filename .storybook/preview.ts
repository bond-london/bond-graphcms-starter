import '../src/styles/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'configure',
      includeNames: true,
      order: ['Getting Started', ['Intro'], 'Design System', ['Colours'], 'Components', ['Heading', 'LinkOrButton'], '*'], 
    },
  },
  previewTabs: {
    'storybook/docs/panel': {hidden: true},
    canvas: {
      hidden: true
    }
  },
  viewMode: 'story'
}