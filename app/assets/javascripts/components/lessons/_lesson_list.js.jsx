var LessonList = React.createClass({
  render: function() {
    var onDelete = this.props.onDelete;
    var lessonNodes = this.props.lessons.map(function(lesson) {
      return (
        <Lesson title={ lesson.title } complexity={ lesson.complexity } tags={ lesson.tags.join(', ') } objectives={ lesson.objectives.join(', ')} onDelete={ onDelete } id={ lesson.id } />
      )
    });

    return (
      <ul>
        { lessonNodes }
      </ul>
    )
  }
});
