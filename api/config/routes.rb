# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users
  resources :events

  get 'sessions', action: :show, controller: 'sessions'
  get 'auth/google_oauth2/callback', to: 'sessions#google_auth'
end
