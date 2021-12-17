import styled from 'styled-components';
import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import { GlobalStyle } from './Styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
