# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users
  resources :events

  post 'auth/:provider/callback', to: 'users#create'
  delete 'users/:email', to: 'users#destroy', constraints: { email: %r{[^/]+} }
end
