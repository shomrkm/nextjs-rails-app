class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      # TODO: ドメインをセットすると Cookie にセットされない
      # domain: 'http://localhost:3000',
      value: form_authenticity_token,
      # secure: true,
      # same_site: :none,
    }
  end
end
