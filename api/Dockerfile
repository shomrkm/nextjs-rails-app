FROM ruby:3.1

RUN apt update -qq && apt install -y postgresql-client
RUN mkdir /api
WORKDIR /api
# COPY Gemfile /api/Gemfile
# COPY Gemfile.lock /api/Gemfile.lock
# RUN bundle install
COPY . /api

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["sh"]