import React, { Component } from 'react'
import Person from './Person'

class NameList extends Component {

  render() {
    const names = ['Abdul','lit','Rashid']
    const nameList = names.map((name,index) =>  <h2>{index}: {name}</h2>)
    const persons = [
        {
            id:1,
            name:'Abdul',
            age: 26,
            skill:'Javascript'
        },
        {
            id:2,
            name:'Razzaq',
            age: 26,
            skill:'Javascript'
        },{
            id:3,
            name:'Shaheen',
            age: 26,
            skill:'Javascript'
        },
    ]
  

const personList = persons.map(person => <Person key={person.id} person={person}/>)
return <h2>{personList} {nameList}</h2>

  }
}

export default NameList
