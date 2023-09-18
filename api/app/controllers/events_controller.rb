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

  def new
    @event = current.user.created_events.build
  end

  def create
    @event = current_user.created_events.build(event_params)

    if @event.save
      render json: @event, status: :ok
    else
      render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :place, :start_at, :end_at, :content)
  end
  
end
