# frozen_string_literal: true

class ApplicationSerializer < Blueprinter::Base
  ANCESTRY_SURROUNDING_SLASHES_REGEX = %r(^/|/$)
end
