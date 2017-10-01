Rails.application.routes.draw do
  root 'dashboard#index'
  get '*path', to: 'dashboard#index'
end
