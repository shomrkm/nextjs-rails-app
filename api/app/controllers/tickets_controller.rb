class TicketsController < ApplicationController
  def create
    event = Event.find(params[:event_id])
    @ticket = current_user.tickets.build do |t|
      t.event = event
      t.comment = params[:ticket][:comment]
    end

    render json: { errors: @ticket.errors.full_messages }, status: :unprocessable_entity unless @ticket.save

    render json: @ticket, status: :ok
  end

  def destroy
    ticket = current_user.tickets.find_by(id: params[:id])
    unless ticket
      render json: {}, status: :not_found
      return
    end

    unless ticket.destroy!
      render json: { errors: @ticket.errors.full_messages }, status: :unprocessable_entity
      return
    end

    render json: {}, status: :ok
  end
end
