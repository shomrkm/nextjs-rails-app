class EventsController < ApplicationController
  def index
    if current_user
      events = current_user.events
      events = [] unless events
      render json: events, status: :ok
    else
      events = Event.all
      render json: events, status: :ok
    end

  end
end
