class Task < ApplicationRecord
  before_create :assign_no

  validates :title, length: { maximum: 50 }, presence: true
  validates :description, length: { maximum: 500 }
  validates :status, presence: true

  enum status: {
    todo: 0,
    in_progress: 1,
    in_review: 2,
    completed: 3,
    closed: 4,
  }

  scope :uncompleted_tasks, -> { where.not(status: [:complted, :closed]) }

  private

  def assign_no
    self.no = Task.maximum(:no).to_i + 1
  end

end
