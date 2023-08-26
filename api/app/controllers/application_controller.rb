class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: 'localhost',
      value: form_authenticity_token,
      # secure: true,
      # same_site: :none,
    }
  end
end
