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

  editLesson: function(lessonId) {
    $.ajax({
      url: '/lessons/' + lessonId,
      type: "GET",
      dataType: "json",
      success: function(data) {
        this.setState({ formData: data })
      }.bind(this)
    });
  },

  deleteLesson: function(lessonId) {
    var lessons = this.state.lessons;
    var newLessons = lessons.filter(function(elem) {
      return elem.id != lessonId;
    });

    this.setState({ lessons: newLessons })

    $.ajax({
      url: '/lessons/' + lessonId,
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        console.log("Lesson #" + lessonId + " was deleted");
      }
    });
  },

  render: function() {
    return (
      <div className="lesson-box">
        <LessonList
          onDelete={ this.deleteLesson }
          onEdit={ this.editLesson  }
          lessons={ this.state.lessons }
        />
        <h2>Submit Lesson</h2>
        <LessonForm
          form={ this.state.form }
          formData={ this.state.formData }
          onLessonSubmit={ this.handleLessonSubmit }
        />
      </div>
    )
  }
});

