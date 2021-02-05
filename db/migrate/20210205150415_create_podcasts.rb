class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :publisher, null: false
      t.string :title, null: false
      t.string :description
      t.string :image
      t.string :host, null: false

      t.timestamps null: false
    end
  end
end
