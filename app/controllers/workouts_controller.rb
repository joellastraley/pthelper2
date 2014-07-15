class WorkoutsController < ApplicationController

  def index
    @exercises = current_user.exercises
    @name = current_user.user_name

    if @exercises
      render json: @exercises
    else
      render status: 400, nothing: true
    end
  end

end
