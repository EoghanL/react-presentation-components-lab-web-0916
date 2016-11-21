const React = require('react')
class DumberComponent extends React.Component {
  handleClick(){
    console.log("STILL HAPPY")
  }
  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>I am just happy</div>
    )
  }
}
module.exports = DumberComponent
