var Lesson = React.createClass({
  render: function() {
    return (
      <li>
        <h1>{ this.props.title }</h1>
        <p>{ this.props.complexity }</p>
        <p>{ this.props.tags }</p>
        <p>{ this.props.objectives }</p>
      </li> 
    )
  }
});
