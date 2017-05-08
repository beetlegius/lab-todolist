Rails.application.routes.draw do

  namespace :api do
    defaults format: :json do
      resources :todos
    end
  end

  root to: 'todos#dashboard'
end
