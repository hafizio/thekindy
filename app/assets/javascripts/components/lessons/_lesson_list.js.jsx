var LessonList = React.createClass({
  render: function() {
    var lessonNodes = this.props.lessons.map(function(lesson) {
      return (
        <Lesson title={ lesson.title } complexity={ lesson.complexity } tags={ lesson.tags.join(', ') } objectives={ lesson.objectives.join(', ') }/>
      )
    });

    return (
      <ul>
        { lessonNodes }
      </ul>
    )
  }
});
