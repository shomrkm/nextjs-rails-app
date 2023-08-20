class ApplicationController < ActionController::API
  include SessionsHelper
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: 'localhost:3000', # 親ドメイン
      value: form_authenticity_token
    }
  end
end
