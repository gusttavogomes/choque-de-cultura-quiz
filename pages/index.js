import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'; //Nao precisa colocar o nome do arquivo pq deduz q é um index.js 
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

/**const BackgroundImage = styled.div`
  background-image:url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;




export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>  
          </Widget.Header>
          <Widget.Content>            
            <p>asdasd afadfasfa</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>Teste</h1>
          <p>asdasd afadfasfa</p>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gusttavogomes"/>
    </QuizBackground>
  )
}
