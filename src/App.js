import React from 'react';
import './App.css';
import Article from './components/Article';
import { Button } from './components/Button';
import ControlledInput from './components/ControlledInput';
import { Layout } from './components/Layout';
import LayoutComponent from './components/LayoutComponent';
import ProfileSummary from './components/ProfileSummary';
import Section from './components/Section';

const App = () => {
  return (
    <div className="App">
      <Section title='Destructuring props'>
        <Article title='How do we destructure props?' content='We do this with braces "{ }"' author='Lucas' /> {/* Destructuring of props */}
      </Section>
      <Section title='JSX spread attributes'>
        <Button leftIcon='🙂'>
          I'm a button
        </Button>
        <Button leftIcon='😎' onClick={() => alert('Button pressed!')}>
          I'm a button with a clickable event!
        </Button>
      </Section>
      <Section title='Conditional rendering'>
        <ProfileSummary role='guest' userName='guest'></ProfileSummary>
        <ProfileSummary role='admin' userName='Lucas'></ProfileSummary>
      </Section>
      <Section title='Children types'>
        <div>{["Hello ", <span>World</span>, "!"]}</div>
      </Section>
      <Section title='Style component'>
        <Button >I'm a button!</Button>
        <Button primary>I'm a primary button!</Button>
      </Section>
      <Section title='Layout component'>
        <LayoutComponent />
      </Section>
      <Section title='Controlled input'>
        <ControlledInput />
      </Section>
    </div>
  );
}

export default App;
