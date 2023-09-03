class SessionsController < ApplicationController

    def show
      set_csrf_token
      render json: {}, status: :ok
    end

    def google_auth
      # Googleからの認証データを取得
      auth_hash = request.env['omniauth.auth']
      if (user = User.find_or_create_from_auth_hash(auth_hash))
        binding.irb
        log_in user
      end

      # TODO: uid (user id) を jwt で Cookie にセットする？
      redirect_to "#{Rails.application.credentials.frontend[:domain]}"

      # user = User.from_omniauth(access_token)

      # JWTを生成
      # jwt = encode_token({ user_id: user.id })

      # JWTをフロントエンドに送る（詳細は実装に依存）
      # render json: { token: jwt }
    end
end
