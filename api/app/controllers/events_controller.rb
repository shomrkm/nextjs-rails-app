class EventsController < ApplicationController
  def index
    if current_user
      events = current_user.created_events
      events = [] unless events
      render json: events, status: :ok
    else
      events = Event.all
      render json: events, status: :ok
    end

  end
end
