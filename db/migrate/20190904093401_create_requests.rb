class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.text :word
      t.text :public_id
      t.text :name
      t.text :email
      t.text :status

      t.timestamps
    end
  end
end
