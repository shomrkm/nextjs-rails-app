class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :image_url

      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false

      add_index :users, [:provider, :uid], unique: true
    end
  end
end
