FactoryBot.define do
  factory :user, aliases: [:owner] do
    provider { 'google' }
    sequence(:uid) { |i| "uid#{i}" }
    sequence(:name) { |i| "name#{i}" }
    sequence(:email) { |i| "test#{i}@gmail.com" }
    sequence(:image_url) { |i| "https://lh3.googleusercontent.com/a/A/#{i}" }
  end
end
