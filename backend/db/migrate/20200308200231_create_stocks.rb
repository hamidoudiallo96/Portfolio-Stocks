class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.decimal :open_price
      t.decimal :current_price
      t.integer :shares, default: 40

      t.timestamps
    end
  end
end
