
class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :ex_name
      t.boolean :two_sides?
      t.integer :reps
      t.integer :holdtime
      t.string :img_url
      t.references :user
    end
  end
end
