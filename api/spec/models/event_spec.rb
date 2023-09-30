require 'rails_helper'

RSpec.describe Event, type: :model do
  describe 'validations' do
    let(:user) { create(:user) }
    let(:ticket) { create(:ticket)}
    let(:event) { build(:event, owner: user, tickets: [ticket]) }

    it 'is valid with valid attributes' do
      expect(event).to be_valid
    end

    it 'is not valid without a name' do
      event.name = nil
      expect(event).to_not be_valid
    end

    it 'is not valid with a name longer than 50 characters' do
      event.name = 'a' * 51
      expect(event).to_not be_valid
    end

    it 'is not valid without a place' do
      event.place = nil
      expect(event).to_not be_valid
    end

    it 'is not valid with a place longer than 100 characters' do
      event.place = 'a' * 101
      expect(event).to_not be_valid
    end

    it 'is not valid without content' do
      event.content = nil
      expect(event).to_not be_valid
    end

    it 'is not valid with content longer than 2000 characters' do
      event.content = 'a' * 2001
      expect(event).to_not be_valid
    end

    it 'is not valid without a start_at' do
      event.start_at = nil
      expect(event).to_not be_valid
    end

    it 'is not valid without an end_at' do
      event.end_at = nil
      expect(event).to_not be_valid
    end

    it 'is not valid if start_at is after or equal to end_at' do
      event.start_at = Time.current + 1.day
      event.end_at = Time.current
      expect(event).to_not be_valid
      expect(event.errors[:start_at]).to include("must be set before the end time")
    end
  end
end
