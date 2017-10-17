class CreateBarberServices < ActiveRecord::Migration[5.1]
    def up
        create_table :barber_services do |t|
            t.integer "barber_user_id"
            t.integer "service_id"
            t.timestamps
        end
        add_index("barber_services", ['barber_user_id', 'service_id'])
    end
    def down
        drop_table :barber_services
    end
end
