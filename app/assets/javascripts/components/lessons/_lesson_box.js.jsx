var LessonBox = React.createClass({
  getInitialState: function() {
    return JSON.parse(this.props.presenter)
  },

  handleLessonSubmit: function(formData, action) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function(data) {
        this.setState({ lessons: data })
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <LessonList lessons={ this.state.lessons }/>
        <h2>Submit Lesson</h2>
        <LessonForm form={ this.state.form } onLessonSubmit={ this.handleLessonSubmit }/>
      </div>
    )
  }
});

