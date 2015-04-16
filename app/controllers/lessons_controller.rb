class LessonsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @presenter = {
      lessons: Lesson.last(5),
      form: {
        action: lessons_path,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end

  def create
    @lesson = Lesson.new(lesson_params)
    @lesson.save

    if request.xhr?
      render json: Lesson.last(5)
    else
      redirect_to :comments_path
    end
  end

  private

  def lesson_params
    params.require(:lesson).permit(:title, :complexity, :tags, :objectives)
  end
end
