class ChangeLengthBackToNumber < ActiveRecord::Migration[6.0]
  def change
    change_column :episodes, :length, :integer, null: false
  end
end
