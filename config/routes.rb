Rails.application.routes.draw do
  devise_for :users
  # root to: "home#index"
  # root "messages#index"
  root "messages#index"
  resources :users, only: [:edit, :update]
end
