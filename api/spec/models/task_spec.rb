require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "validations" do
    let(:task) { build(:task) }

    it 'is valid with valid attributes' do
      expect(task).to be_valid
    end

    it 'is not valid without a title' do
      task.title = nil
      expect(task).not_to be_valid
    end

    it 'is not valid with title longer than 50 characters' do
      task.title = 'a' * 51
      expect(task).not_to be_valid
    end

    it 'is not valid with description longer than 500 characters' do
      task.description = 'a' * 501
      expect(task).not_to be_valid
    end

    it 'is not valid without a status' do
      task.status = nil
      expect(task).not_to be_valid
    end

  end
end
