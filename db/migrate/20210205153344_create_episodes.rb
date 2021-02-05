class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.integer :number, null: false
      t.string :title, null: false
      t.string :description
      t.datetime :date, null: false
      t.integer :length, null: false
      t.string :photo
      t.references :podcast, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
