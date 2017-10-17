class DropTableServicesUsers < ActiveRecord::Migration[5.1]
  def change
      drop_table :services_users
  end
end
