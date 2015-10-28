class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.integer :student_id
      t.string :comment
      t.integer :points

      t.timestamps null: false
    end
  end
end
