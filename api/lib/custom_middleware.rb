class CustomMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    request = Rack::Request.new(env)
    # ログ出力やデバッグ情報の取得
    puts "Session: #{request.session.inspect}"
    puts "Cookies: #{request.cookies.inspect}"
    puts "Headers: #{getHeaders(request).inspect}"

    @app.call(env)
  end

  private

  def getHeaders(request)
    request.env.select { |k, _v| k.start_with?('HTTP_') }
  end
end
