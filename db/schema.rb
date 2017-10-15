#  db:schema:load

ActiveRecord::Schema.define(version: 20171014214220) do
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
        t.integer "shop_id"
        t.integer "role_id"
        t.string "first_name"
        t.string "last_name"
        t.string "email"
        t.string "phone"
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
        t.string "role_name"
        t.datetime "created_at", null: false
        t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
      t.integer "shop_id"
      t.string "service_name"
      t.string "price"
      t.string "time"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
  end

  create_table "shops", force: :cascade do |t|
      t.string "shop_name"
      t.integer "owner_user_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
  end

  # create_table "roles_users", id: false, force: :cascade do |t|
  #       t.integer "user_id"
  #       t.integer "role_id"
  #       t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
  # end

  create_table "services_users", id: false, force: :cascade do |t|
        t.integer "user_id"
        t.integer "service_id"
        t.index ["user_id", "service_id"], name: "index_users_services_on_user_id_and_service_id"
  end

end
