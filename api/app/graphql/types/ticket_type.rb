# frozen_string_literal: true

module Types
  class TicketType < Types::BaseObject
    field :id, ID, null: false
    field :user, Types::UserType
    field :event, Types::EventType, null: false
    field :comment, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
