import React from 'react'
import Main from '../template/Main'

export default props =>
  <Main
    icon="home"
    title="Início"
    subtitle="Projeto ReactJS.">
    <div className="display-4">Bem vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema para gerenciamemto de usuários desenvolvido em ReactJS com Json-Server!
    </p>
  </Main>
