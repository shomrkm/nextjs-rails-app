require 'rails_helper'

RSpec.describe Types::QueryType do
  describe 'event query' do
    let!(:user) { create(:user) }
    let!(:ticket) { create(:ticket, user: user) }
    let!(:event) { create(:event, tickets: [ticket]) }
    let(:query) do
      <<~GRAPHQL
        query($id: ID!) {
          event(id: $id) {
            id
            name
            place
            startAt
            endAt
            content
            tickets {
                user {
                    name
                }
                comment
            }
          }
        }
      GRAPHQL
    end
    let(:variables) { { id: event.id.to_s } }
    let(:context) { {} }

    it 'returns the specified event' do
      result = ApiSchema.execute(query, variables: variables, context: context)
      data = result.to_h['data']['event']
      expect(data['id']).to eq(event.id.to_s)
      expect(data['name']).to eq(event.name)
      expect(data['place']).to eq(event.place)
      expect(data['startAt']).to eq(event.start_at.iso8601)
      expect(data['endAt']).to eq(event.end_at.iso8601)
      expect(data['content']).to eq(event.content)
      expect(data['tickets'][0]['user']['name']).to eq(user.name)
      expect(data['tickets'][0]['comment']).to eq(ticket.comment)
      
    end
  end
end
