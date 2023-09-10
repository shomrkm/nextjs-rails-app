# frozen_string_literal: true

Rails.application.routes.draw do
  get 'sessions', action: :show, controller: 'sessions'
  get 'auth/google_oauth2/callback', to: 'sessions#google_auth'
  delete 'logout', to: 'sessions#logout'

  get 'users/me', to: 'users#me'
  resources :users
  resources :events

end
