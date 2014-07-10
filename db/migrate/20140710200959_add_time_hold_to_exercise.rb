class AddTimeHoldToExercise < ActiveRecord::Migration
  def change
    add_column :exercises, :holdtime, :integer
  end
end
