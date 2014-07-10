class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.references :user
      t.references :exercise
      t.boolean :completed?
      t.timestamps
    end
  end
end
