Rails.application.routes.draw do
  resources :transactions
  resources :stocks
  get "/auth", to: "auth#persist"
  post "/login", to: "auth#login"
  resources :users, only: [:show, :create, :update]
  resources :transactions, only: [:index, :show, :create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
