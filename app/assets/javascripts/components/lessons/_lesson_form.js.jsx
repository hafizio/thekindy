var LessonForm = React.createClass({
  handleChange: function(e) {
    this.setState({ value: e.target.value });
  },

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

    // reset form after submit
    this.refs.title.getDOMNode().value = '';
    this.refs.complexity.getDOMNode().value = '';
    this.refs.tags.getDOMNode().value = '';
    this.refs.objectives.getDOMNode().value = '';
  },

  render: function() {
    // conditionals for update or create
    var submitText = this.props.formData ? 'Update Lesson' : 'Create Lesson'
    var formAction = this.props.formData ? '/lesson/' + this.props.formData.lessonId : '/lessons'
    var formMethod = this.props.formData ? 'patch' : 'post'
    var title, complexity, tags, objectives;
    if (this.props.formData) {
      title = this.props.formData.title;
      complexity = this.props.formData.complexity;
      tags = this.props.formData.tags;
      objectives = this.props.formData.objectives;
    }

    return (
      <div>
        <form className="lesson-form" ref="form" action={ formAction } accept-charset="UTF-8" method={ formMethod } onSubmit={ this.handleSubmit }>
          <input
            type="hidden"
            name={ this.props.form.csrf_param }
            value={ this.props.form.csrf_token }
          />
          <input
            ref="title"
            name="lesson[title]"
            placeholder="Lesson Title"
            defaultValue={ title }
            onChange={ this.handleChange }
          />
          <input
            ref="complexity"
            type="number"
            name="lesson[complexity]"
            placeholder="Lesson Complexity"
            defaultValue={ complexity }
            onChange={ this.handleChange }
          />
          <input
            ref="tags"
            name="lesson[tags]"
            placeholder="Lesson Tags"
            defaultValue={ tags }
            onChange={ this.handleChange }
          />
          <input
            ref="objectives"
            name="lesson[objectives]"
            placeholder="Lesson Objectives"
            defaultValue={ objectives }
            onChange={ this.handleChange }
          />
          <button type="submit">{ submitText }</button>
        </form>
      </div>
    )
  }
});
