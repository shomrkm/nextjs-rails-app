class EventsController < ApplicationController
  def index
    events = Event.all
    render json: events, status: :ok
  end

  def my_events
    events = current_user.created_events
    events = [] unless events
    render json: events, status: :ok
  end

  def show
    @event = Event.eager_load([:tickets, { tickets: :user}]).find(params[:id])
    if @event
      render json: @event.as_json(include: [:owner, 
        tickets: {
          include: :user
        }])
    else
      render json: { errors: ["Book with the specified ID (#{params[id]}) was not found."] }, status: :not_found
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

  def destroy
    @event = current_user.created_events.find(params[:id])
    if @event.destroy!
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
