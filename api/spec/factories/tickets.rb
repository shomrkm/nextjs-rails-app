FactoryBot.define do
  factory :ticket do
    user
    event
    sequence(:comment) { |i| "Comment #{i}" }
  end
end
