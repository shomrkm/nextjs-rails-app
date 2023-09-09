require 'jwt'

class JwtHandler
  SECRET_KEY = Rails.application.credentials.jwt[:secret_key_base]

  def self.encode(payload)
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    binding.b
    HashWithIndifferentAccess.new decoded
  end
end
