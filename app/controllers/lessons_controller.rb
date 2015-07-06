class LessonsController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :set_lesson, only: [:update, :show, :destroy]

  def show
    render json: @lesson
  end

  def index
    @presenter = {
      lessons: Lesson.all,
      form: {
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

  def update
    @lesson.update(lesson_params)
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
      render :index
    end
  end
end
