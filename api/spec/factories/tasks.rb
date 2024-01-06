FactoryBot.define do
  factory :task do
    sequence(:title) { |i| "Task #{i}" }
    sequence(:description) { |i| "Task description #{i}" }
    sequence(:no) { _1 }
  end
end
