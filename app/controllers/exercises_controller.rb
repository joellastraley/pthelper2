class ExercisesController < ApplicationController

  def index
    @exercises = Exercises.all

    if @exercises
      render json: @exercises
    else
      render status: 400, nothing: true
    end
  end

  def show
    @exercise = Exercise.find(params[:id])

    if @exercise
      render json: @exercise
    else
      render status: 400, nothing: true
    end
  end

  def create
    @exercise = Exercise.new(exercise_params)

    if @exercise.save
      render json: @exercise
    else
      render status: 400, nothing: true
    end
  end

  def update
    @exercise = exercise.find(params[:id])

    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render status: 400, nothing: true
    end
  end

  def destroy
    @exercise = exercise.find(params[:id])

    if @exercise.destroy
      render json: {}
    else
      render status: 400, nothing: true
    end
  end

  private

  def exercise_params
    params.require(:exercise).permit(:ex_name, :two_sides?, :reps, :img_url, :time_hold)
  end

end
