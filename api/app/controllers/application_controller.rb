class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  include SessionsHelper

  protect_from_forgery with: :exception
  # before_action :check_logged_in

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: 'localhost',
      value: form_authenticity_token,
      # secure: true,
      # same_site: :none,
    }
  end
  
  # def check_logged_in
  #   return if current_user

  #   redirect_to root_path
  # end
end
