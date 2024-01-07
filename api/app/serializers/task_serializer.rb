# frozen_string_literal: true

class TaskSerializer < ApplicationSerializer
  fields :id, :no, :title, :description, :status
end
