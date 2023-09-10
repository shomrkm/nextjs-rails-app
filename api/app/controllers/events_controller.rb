class EventsController < ApplicationController
  def index
    if current_user
      events = Event.where(owner_id: current_user.id)
      events = [] unless events
      render json: events, status: :ok
    else
      events = Event.all
      render json: events, status: :ok
    end

  end
end
