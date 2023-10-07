require_relative 'boot'
# require_relative "../lib/custom_middleware"

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'active_storage/engine'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_mailbox/engine'
require 'action_text/engine'
require 'action_view/railtie'
require 'action_cable/engine'
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.time_zone = 'Tokyo'
    config.api_only = true

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::ContentSecurityPolicy::Middleware

    # For Debugging
    # config.middleware.use CustomMiddleware

    Rails.application.config.middleware.use OmniAuth::Builder do
      provider :google_oauth2,
               Rails.application.credentials.google[:client_id],
               Rails.application.credentials.google[:client_secret],
               skip_jwt: true
    end

    # Disable cross-origin validation when the domain is different from the client side
    config.action_controller.forgery_protection_origin_check = false
  end
end
