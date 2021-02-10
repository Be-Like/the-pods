class ChangeLengthTypeToFloat < ActiveRecord::Migration[6.0]
  def change
    change_column :episodes, :length, :float, null: false
  end
end
