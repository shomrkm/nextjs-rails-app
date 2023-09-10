require_relative '../../lib/jwt_handler'

class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: Rails.env.production? ? 'production_domain.com' : 'localhost',
      value: form_authenticity_token,
      secure: Rails.env.production?
    }
  end

  def set_user_token(email)
    token = JwtHandler.encode({ email: email })
    cookies['token'] = {
      domain: Rails.env.production? ? 'production_domain.com' : 'localhost',
      value: token,
      # httponly: true,
      # same_site: none,
      secure: Rails.env.production?
    }
  end

  def current_user
    @current_user ||= get_current_user
  end

  private

  def get_current_user
    token = get_user_token
    return nil unless token
      
    user = User.find_by(email: token)
    return nil unless user
  
    user
  end

  def get_user_token
    token = request.headers['Authorization']&.split('Bearer ')&.last
    return nil unless token

    decoded_token = JwtHandler.decode(token)
    return nil unless decoded_token['email']

    decoded_token['email']
  end
end  

