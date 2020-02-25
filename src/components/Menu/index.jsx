import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchForm from '../SearchForm'

class Navigation extends Component {

  render() {
    return(
	  <Segment textAlign='right' clearing style={{ marginTop: 50}}>
		<h1>
		  Hola Mundo
		</h1>
      
        <SearchForm>
			SearchForm
		</SearchForm>
      </Segment>
    )
  }
}

export default Navigation;
