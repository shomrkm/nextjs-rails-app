class User < ApplicationRecord
  has_many :created_events, class_name: "Event" ,foreign_key: 'owner_id'

  def self.find_or_create_from_auth_hash(auth_hash)
    user_params = user_params_from_auth_hash(auth_hash)
    find_or_create_by(email: user_params[:email]) do |user|
      user.update(user_params)
    end
  end

  private

  def self.user_params_from_auth_hash(auth_hash)
    {
      uid: SecureRandom.uuid,
      provider: auth_hash.provider,
      name: auth_hash.info.name,
      email: auth_hash.info.email,
      image_url: auth_hash.info.image,
    }
  end
end
