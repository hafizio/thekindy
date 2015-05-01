var Lesson = React.createClass({
  deleteLesson: function() {
    this.props.onDelete(this.props.id)
  },

  editLesson: function() {
    this.props.onEdit(this.props.id)
  },

  render: function() {
    return (
      <li>
        <h1>#{ this.props.id }, Title: { this.props.title }</h1>
        <p>{ this.props.complexity }</p>
        <p>{ this.props.tags }</p>
        <p>{ this.props.objectives }</p>
        <a href="#delete" onClick={ this.deleteLesson }>delete me</a>
        <br />
        <a onClick={ this.editLesson }>edit</a>
      </li> 
    )
  }
});
