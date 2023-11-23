require 'date'

class Event < ApplicationRecord
  has_many :tickets, -> { order(created_at: :desc) }, dependent: :destroy
  belongs_to :owner, class_name: 'User'

  validates :name, length: { maximum: 50 }, presence: true
  validates :place, length: { maximum: 100 }, presence: true
  validates :content, length: { maximum: 2000 }
  validates :start_at, presence: true
  validates :end_at, presence: true
  validate :start_at_should_be_before_end_at

  scope :past_events, -> { where('end_at < ?', Date.today) }
  scope :up_comming_events, -> { where('end_at >= ?', Date.today) }

  private

  def start_at_should_be_before_end_at
    return unless start_at && end_at

    return unless start_at >= end_at

    errors.add(:start_at, 'must be set before the end time')
  end
end
