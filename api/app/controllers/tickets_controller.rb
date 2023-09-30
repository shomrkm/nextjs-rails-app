class TicketsController < ApplicationController

  def create
    event = Event.find(params[:event_id])
    @ticket = current_user.tickets.build do |t|
      t.event = event
      t.comment = params[:ticket][:comment]
    end

    if !@ticket.save
      render json: { errors: @ticket.errors.full_messages }, status: :unprocessable_entity
    end

    render json: @ticket, status: :ok
  end

  def destroy
    ticket = current_user.tickets.find_by(id: params[:id])
    if !ticket
      render json: {}, status: :not_found
      return
    end
    
    if !ticket.destroy!
      render json: { errors: @ticket.errors.full_messages }, status: :unprocessable_entity
      return
    end

    render json: {}, status: :ok
  end

end
