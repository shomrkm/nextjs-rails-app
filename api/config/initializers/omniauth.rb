Rails.application.config.middleware.use OmniAuth::Builder do
    if Rails.env.development? || Rails.env.test?
        provider :github, "3737ff2fee95c598d588", "f31a5f57e366d74d2ae03b568304efbb33caec0c"
    else
        provider :github,
            Rails.application.credentials.github[:client_id],
            Rails.application.credentials.github[:client_secret]
    end
end