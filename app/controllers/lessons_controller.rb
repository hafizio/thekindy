class LessonsController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :set_lesson, only: [:destroy]

  def index
    @presenter = {
      lessons: Lesson.all,
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
      render json: Lesson.all
    else
      redirect_to :comments_path
    end
  end

  def destroy
    @lesson.destroy
    if request.xhr?
      render json: Lesson.all
    else
      redirect_to :comments_path
    end
  end

  private

  def set_lesson
    @lesson = Lesson.find(params[:id])
  end

  def lesson_params
    params.require(:lesson).permit(:title, :complexity, :tags, :objectives)
  end
end
