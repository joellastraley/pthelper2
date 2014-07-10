class DropTimeFromExercise < ActiveRecord::Migration
  def change
    remove_column :exercises, :time_to_hold
  end
end
