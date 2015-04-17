Rails.application.routes.draw do
  root 'pages#home'
  resources :lessons, only: [:index, :create, :destroy]
end
