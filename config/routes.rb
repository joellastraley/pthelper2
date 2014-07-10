Rails.application.routes.draw do
   root 'app#index'

  resources :users do
    resources :exercises
  end

  resources :users do
    resources :workouts
  end
  resources :sessions, only: [:create]

  get '/signup' => 'users#new'
  get '/signin' => 'sessions#new'
  delete '/signout' => 'sessions#destroy'

end
