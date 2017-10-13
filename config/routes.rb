Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :barbers, only: [:index, :create, :destroy, :update], defaults: {format: :json}
      resources :services, only: [:index, :create, :destroy, :update], defaults: {format: :json}
    end
  end

  get '*path', to: 'site#index'
end
