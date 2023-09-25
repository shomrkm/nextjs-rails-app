class TicketsController < ApplicationController

  def create
    event = Event.find(params[:event_id])
    @ticket = current_user.tickets.build do |t|
      t.event = event
      t.comment = params[:ticket][:comment]
    end

    if @ticket.save
      render json: @ticket, status: :ok
    else
      render json: { errors: @ticket.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
