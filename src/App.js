import React from 'react'
class App extends React.PureComponent{
  state = {
    name: "Tigran"
  }

  updateName = () => {
    this.setState({
      name: "Armen"
    })
  }

  render(){
    console.log("RENDER WORKED...")

    return <div>
      <h1>Hello {this.state.name}</h1>
      <button onClick={this.updateName}>update</button>
    </div>
  }
}

export default App
