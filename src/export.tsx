import React from 'react';
import ReactDOM from 'react-dom';
import ChatWidget from './components/ChatWidget';

// TODO: there's probably a more elegant way to do this...

const noop = () => {};
const w = window as any;
const config = (w.Papercups && w.Papercups.config) || {};
const {
  versionID,
  title,
  subtitle,
  newMessagePlaceholder,
  primaryColor,
  greeting,
  customer,
  runtimeEndpoint,
  iframeUrlOverride,
  customIconUrl,
  companyName,
  avatar,
  iconVariant = 'outlined',
  hideToggleButton = false,
  defaultIsOpen = false,
  onChatLoaded = noop,
  onChatOpened = noop,
  onChatClosed = noop,
  onMessageSent = noop,
  onMessageReceived = noop,
} = config;

if (!versionID) {
  throw new Error(
    'An versionID token is required to render the Papercups chat widget!'
  );
}

const el = document.createElement('div');
el.id = 'PapercupsChatWidget';
document.body.appendChild(el);

ReactDOM.render(
  <ChatWidget
    versionID={versionID}
    title={title}
    subtitle={subtitle}
    newMessagePlaceholder={newMessagePlaceholder}
    primaryColor={primaryColor}
    greeting={greeting}
    customer={customer}
    companyName={companyName}
    avatar={avatar}
    runtimeEndpoint={runtimeEndpoint}
    iframeUrlOverride={iframeUrlOverride}
    customIconUrl={customIconUrl}
    defaultIsOpen={defaultIsOpen}
    iconVariant={iconVariant}
    hideToggleButton={hideToggleButton}
    onChatLoaded={onChatLoaded}
    onChatOpened={onChatOpened}
    onChatClosed={onChatClosed}
    onMessageSent={onMessageSent}
    onMessageReceived={onMessageReceived}
  />,
  document.getElementById('PapercupsChatWidget')
);
