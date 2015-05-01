Rails.application.routes.draw do
  root 'pages#home'
  resources :lessons, only: [:show, :index, :create, :destroy]
end
