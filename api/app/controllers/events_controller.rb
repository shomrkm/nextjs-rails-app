class EventsController < ApplicationController
  def index
    token = get_user_token

    if token && token["email"]
      user = User.find_by(email: token["email"])
      events = Event.where(owner_id: user.id)
      events = [] unless events
      render json: events, status: :ok
    else
      events = Event.all
      render json: events, status: :ok
    end

  end
end
