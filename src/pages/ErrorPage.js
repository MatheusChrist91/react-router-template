import React from 'react'
import { MainContainer} from "../style";
import Header from '../components/Header';

const ErrorPage = () => {
  return (
    <div>
    <MainContainer>
        <Header />
        <h1>Page not Found</h1>
    </MainContainer>
      
    </div>
  )
}

export default ErrorPage
