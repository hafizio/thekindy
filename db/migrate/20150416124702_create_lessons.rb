class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.string :title, null: false
      t.integer :complexity
      t.text :objectives, array: true, default: []
      t.text :tags, array: true, default: []

      t.timestamps null: false
    end
  end
end
