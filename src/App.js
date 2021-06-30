
import './App.css';
import BigDiv from './components/BigDiv'
import Right from './components/RightArticle'
import Left from './components/LeftArticle'
import Section from './components/Section'
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
      <BigDiv>
        <Right />
        <div className="sectionDiv">
          <h1>Lorem ipsum</h1>
          <Section title="titre 1 Lorem ipsum">
            <Circle colar='#472759'/>
            <Circle colar='black' />
            <Circle colar='#472759' />
          </Section>
          <Section title="titre 1 Lorem ipsum">
            <Circle colar='#472759' />
          </Section>
          <Section title="titre 1 Lorem ipsum">
            <Circle colar='#472759' />
            <Circle colar='#472759' />
          </Section>
        </div>
        <Left />
      </BigDiv>
    </div>
  );
}

export default App;
