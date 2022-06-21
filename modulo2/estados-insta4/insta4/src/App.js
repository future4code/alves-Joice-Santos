import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {

  posts: [
      {
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
      },

      {
          nomeUsuario={'Luke'}
          fotoUsuario={'https://picsum.photos/id/1/50/50'}
          fotoPost={'https://picsum.photos/id/1025/200/150'}
      },

      {
          nomeUsuario={'Leia'}
          fotoUsuario={'https://picsum.photos/id/1027/50/50'}
          fotoPost={'https://picsum.photos/id/1037/200/150'}
      }

    
  ],
  }
}

export default App;
