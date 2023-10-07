require 'rails_helper'
require_relative '../../lib/jwt_handler'

RSpec.describe 'Events', type: :request do
  let(:user) { create(:user) }
  let(:event) { create(:event, owner: user) }
  let(:token) { JwtHandler.encode({ email: user.email }) }

  describe 'GET /index' do
    before do
      create_list(:event, 3, owner: user)
    end

    it 'returns all events' do
      get '/events'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body).size).to eq(Event.count)
    end
  end

  describe 'GET /events/my_events' do
    before do
      create_list(:event, 3, owner: user)
      create_list(:event, 2)
    end

    it 'returns events created by the current user' do
      headers = { 'Authorization' => "Bearer #{token}" }
      get('/events/my_events', headers:)
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body).size).to eq(Event.where(owner: user).count)
    end
  end

  describe 'GET /show' do
    it 'returns the specific event' do
      get "/events/#{event.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(event.id)
    end
  end
end
