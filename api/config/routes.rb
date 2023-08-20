# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users
  resources :events

  get 'sessions', action: :show, controller: 'sessions'
  # get 'auth/:provider/callback', to: 'sessions#create'
  # get 'auth/failure', to: redirect('/')
  # get 'log_out', to: 'sessions#destroy', as: 'log_out'

  # resources :sessions, only: %i[create destroy]
end
