class CreateMerdeafScores < ActiveRecord::Migration[5.2]
  def change
    create_table :merdeaf_scores do |t|
      t.text :name
      t.integer :score

      t.timestamps
    end
  end
end
