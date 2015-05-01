class LessonsController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :set_lesson, only: [:show, :destroy]

  def show
    render json: @lesson
  end

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
    Lesson.create(lesson_params)
    ajaxify
  end

  def destroy
    @lesson.destroy
    ajaxify
  end

  private

  def set_lesson
    @lesson = Lesson.find(params[:id])
  end

  def lesson_params
    params.require(:lesson).permit(:title, :complexity, :tags, :objectives)
  end

  def ajaxify
    if request.xhr?
      render json: Lesson.all
    else
      redirect_to :comments_path
    end
  end
end
