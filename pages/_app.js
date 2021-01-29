import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body { 
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;
/**https://coolors.co/1c110a-2e0d02-f40000-940000-630000
 * https://colorhunt.co/palette/220437
 * https://colorhunt.co/palette/225760
 * https://color.adobe.com/pt/create/color-wheel
 */

export default function App({ Component, pageProps }) {
  return (
    <>
      
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
