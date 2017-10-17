Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
        post '/barber_services/:barber_id/:service_id', to: 'barber_services#create_barber_services', defaults: {format: :json}
        delete '/barber_services/:barber_id/:service_id', to: 'barber_services#destroy_barber_services'
        resources :barber_services, only: [:show], defaults: {format: :json}
        resources :barbers, only: [:index, :create, :destroy, :update], defaults: {format: :json}
        resources :services, only: [:index, :create, :destroy, :update], defaults: {format: :json}
    end
  end

  get '*path', to: 'site#index'
end
