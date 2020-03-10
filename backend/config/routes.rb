Rails.application.routes.draw do
  get "/auth", to: "auth#persist"
  post "/login", to: "auth#login"
  resources :users, only: [:index, :show, :create, :update]
  resources :stocks, only: [:index, :show]
  resources :transactions, only: [:index, :show, :create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
