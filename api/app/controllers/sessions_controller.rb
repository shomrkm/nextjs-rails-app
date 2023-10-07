class SessionsController < ApplicationController
  def show
    set_csrf_token
    render json: {}, status: :ok
  end

  def google_auth
    # Googleからの認証データを取得
    auth_hash = request.env['omniauth.auth']
    if (user = User.find_or_create_from_auth_hash(auth_hash))
      set_user_token(user.email)
    end

    redirect_to "#{Rails.application.credentials.frontend[:domain]}"
  end

  def logout
    cookies.delete(:token)
  end
end
