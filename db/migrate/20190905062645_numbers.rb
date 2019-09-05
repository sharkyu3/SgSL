class Numbers < ActiveRecord::Migration[5.2]
  def change
    create_table :numbers do |t|
      t.text :name
      t.text :link

      t.timestamps
    end
  end
end