var LessonForm = React.createClass({
  handleSubmit: function(e) {
    // prevent redirect
    e.preventDefault();

    // get value
    var title = this.refs.title.getDOMNode().value.trim();
    var complexity = this.refs.complexity.getDOMNode().value.trim();
    var tags = this.refs.tags.getDOMNode().value.split(', ')
    var objectives = this.refs.objectives.getDOMNode().value.split(', ')

    // validate - break if null?
    if (!title || !complexity || !tags || !objectives) {
      return false
    }

    // submit
    var formData = $(this.refs.form.getDOMNode()).serialize();
    this.props.onLessonSubmit(formData, this.props.form.action);

    // reset form
    this.refs.title.getDOMNode().value = '';
    this.refs.complexity.getDOMNode().value = '';
    this.refs.tags.getDOMNode().value = '';
    this.refs.objectives.getDOMNode().value = '';
  },

  render: function() {
    return (
      <div>
        <form ref="form" action={ this.props.form.action } accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
          <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
          <input ref="title" name="lesson[title]" placeholder="Lesson Title" />
          <input ref="complexity" type="number" name="lesson[complexity]" placeholder="Lesson Complexity" />
          <input ref="tags" name="lesson[tags]" placeholder="Lesson Tags" />
          <input ref="objectives" name="lesson[objectives]" placeholder="Lesson Objectives" />
          <button type="submit">Post Lesson</button>
        </form>
      </div>
    )
  }
});
