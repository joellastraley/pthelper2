class ChangeExercise < ActiveRecord::Migration
  def change
    change_column :exercises, :time_to_hold, :integer
  end
end
