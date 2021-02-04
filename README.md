# @papercups-io/chat-widget

> Voiceflow chat widget

[![NPM](https://img.shields.io/npm/v/@papercups-io/chat-widget.svg)](https://www.npmjs.com/package/@papercups-io/chat-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- ## Demo

Available at https://app.papercups.io/demo

![demo](https://user-images.githubusercontent.com/5264279/88118921-e4a37900-cb8c-11ea-825f-86deb8edc518.gif) -->

<!-- ## Install

```bash
npm install --save @papercups-io/chat-widget
```

## Usage

First, sign up at https://app.papercups.io/register to get your account token. Your account token is what you will use to pass in as the `accountId` prop below. -->

### Using in HTML

Paste the code below between your `<head>` and `</head>` tags:

```html
<script>
  window.Papercups = {
    config: {
      // Pass in your voiceflow prototype versionID
      versionID: 'xxxxxxxxxxxxxxxxxxxxxxxx',
      title: 'Welcome to Voiceflow!',
      subtitle: 'Ask us anything in the chat window below 😊',
      newMessagePlaceholder: 'Start typing...',
      primaryColor: '#13c2c2',
    },
  };
</script>
<script
  type="text/javascript"
  async
  defer
  src="https://s3.amazonaws.com/com.voiceflow.chat-window/widget.js"
></script>
```

<!-- ### Using in React

Place the code below in any pages on which you would like to render the widget. If you'd like to render it in all pages by default, place it in the root component of your app.

```tsx
import React from 'react';

import ChatWidget from '@papercups-io/chat-widget';

// You can also import the following in v1.1.0 and above:
// import {ChatWidget, ChatWindow, Papercups} from '@papercups-io/chat-widget'; 
//
// The `ChatWindow` component allows you to embed the chat however you want,
// and the `Papercups` object provides access to functions that can programmatically
// open/close the chat widget, e.g.:
//
// `Papercups.open()` // => opens the chat widget
// `Papercups.close()` // => closes the chat widget
// `Papercups.toggle()` // => toggles (opens or closes) the chat widget

const ExamplePage = () => {
  return (
    <>
      {/*
        Put <ChatWidget /> at the bottom of whatever pages you would
        like to render the widget on, or in your root/router component
        if you would like it to render on every page
      */}
      <ChatWidget
        // Pass in your Papercups account token here after signing up 
        accountId='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx'
        title='Welcome to Papercups!'
        subtitle='Ask us anything in the chat window below 😊'
        newMessagePlaceholder='Start typing...'
        primaryColor='#13c2c2'
        // Optionally pass in a default greeting
        greeting='Hi there! How can I help you?'
        // Optionally pass in metadata to identify the customer
        customer={{
          name: 'Test User',
          email: 'test@test.com',
          external_id: '123',
          metadata: {version: 1, plan: 'premium'} // Custom fields go here
        }}
        // Optionally specify the base URL
        baseUrl='https://app.papercups.io'
        // Add this if you want to require the customer to enter
        // their email before being able to send you a message
        requireEmailUpfront
        // Add this if you want to indicate when you/your agents
        // are online or offline to your customers
        showAgentAvailability
      />
    </>
  );
};
``` -->

## Options

These are the props you can pass into your `<ChatWidget />` React component, or the fields you can specify in your `Papercups.config`:

| Prop | Type | Value | Default |
| :--- | :--- | :----- | :------ |
| **`versionID`** | `string` | Your Voiceflow prototype versionID | N/A |
| **`title`** | `string` | The title in the header of your chat widget | Welcome! |
| **`subtitle`** | `string` | The subtitle in the header of your chat widget | How can we help you? |
| **`avatar`** | `string` | avatar image for the chatbot | N/A |
| **`newMessagePlaceholder`** | `string` | The placeholder text in the new message input | Start typing... |
| **`primaryColor`** | `string` | The theme color of your chat widget | `1890ff` |
| **`defaultIsOpen`** | `boolean` | If you want the chat widget to open as soon as it loads | `false` |
| **`customIconUrl`** | `string` | A link to a custom icon image URL | N/A |
| **`onChatLoaded`** | `() => void` | Callback fired when chat is loaded | N/A |
| **`onChatOpened`** | `() => void` | Callback fired when chat is opened | N/A |
| **`onChatClosed`** | `() => void` | Callback fired when chat is closed | N/A |
| **`onMessageSent`** | `(message: Message) => void` | Callback fired when message is sent | N/A |
| **`onMessageReceived`** | `(message: Message) => void` | Callback fired when message is received | N/A |

<!-- ## Development

To build the project, run `npm start` in the root directory. (If you're running it for the first time, you'll have to run `npm install` first.)

```bash
npm install
npm start
```

To test it out, use the `/example` directory:

```bash
cd example
npm install
npm start
```

This will start a development server on [http://localhost:3000](http://localhost:3000) by default, and open up the example app in your browser. -->

<!-- ### Important notes

By default, the example widget points at development servers for the [Papercups API](https://github.com/papercups-io/papercups) (which runs at http://localhost:4000) and the [Papercups chat window](https://github.com/papercups-io/chat-window) (which runs at http://localhost:8080). These values are set with the [`baseUrl`](https://github.com/papercups-io/chat-widget/blob/master/example/src/App.tsx#L66) and [`iframeUrlOverride`](https://github.com/papercups-io/chat-widget/blob/master/example/src/App.tsx#L67) props respectively. 

If you want to develop against your account in production, you can update these values to the following:
- `baseUrl: http://app.papercups.io`
- `iframeUrlOverride: https://chat-widget.papercups.io`

_(Note that you can also simply remove these props, since the values above are the defaults.)_

You'll also want to update your account token to point to your own account. If you haven't already, create a free account at https://app.papercups.io/register to get started. 

Once you have your account token, update the [`accountId`](https://github.com/papercups-io/chat-widget/blob/master/example/src/App.tsx#L46) prop to point at yours. -->

## Questions?

If you're having any trouble getting started or just want to say hi, join us on [Slack](https://join.slack.com/t/papercups-io/shared_invite/zt-h0c3fxmd-hZi1Zp8~D61S6GD16aMqmg)! :wave:

### Submitting a PR

We welcome any contributions! Please create an issue before submitting a pull request.

When creating a pull request, be sure to include a screenshot! 🎨

## License

MIT © Papercups
