class Alphabets < ActiveRecord::Migration[5.2]
  def change
    create_table :alphabets do |t|
      t.text :name
      t.text :link

      t.timestamps
    end
  end
end