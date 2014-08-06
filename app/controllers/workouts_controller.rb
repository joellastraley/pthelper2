class WorkoutsController < ApplicationController

  def index
    @workouts = current_user.workouts
    @name = current_user.user_name

    if @workouts
      render json: @workouts
    else
      render status: 400, nothing: true
    end
  end

  def create
    @workout = Workout.new(workout_params)

    if @workout.save
      render json: @workout
    else
      render status: 400, nothing: true
    end
  end

  def destroy
    @workout = workout.find(params[:id])

    if @workout.destroy
      render json: {}
    else
      render status: 400, nothing: true
    end
  end

    private

  def workout_params
    params.require(:workout).permit(:user_id, :exercise_id, :completed)
  end

end
