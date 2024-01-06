class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.integer :no
      t.string :title, null: false
      t.string :description
      t.integer :status, default: 0, null: false

      t.timestamps
    end
  end
end
