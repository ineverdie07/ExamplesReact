import React from 'react'
import { Input } from 'semantic-ui-react'

function searchForm (props) {
    return(
      <Input
        action={{ icon: 'write', color: 'teal' }}
        placeholder='Buscar...' />
    )
}

export default searchForm;
