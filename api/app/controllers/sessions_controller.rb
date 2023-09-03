class SessionsController < ApplicationController

    def show
      set_csrf_token
      render json: {}, status: :ok
    end

    def google_auth
      # Googleからの認証データを取得
      access_token = request.env['omniauth.auth']

      ## ToDo: 認証完了後のページへリダイレクトする
      render json: {}, status: :ok

      # user = User.from_omniauth(access_token)

      # JWTを生成
      # jwt = encode_token({ user_id: user.id })

      # JWTをフロントエンドに送る（詳細は実装に依存）
      # render json: { token: jwt }
    end
end
