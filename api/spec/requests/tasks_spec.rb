require 'rails_helper'
require_relative '../../lib/jwt_handler'

RSpec.describe "/tasks", type: :request do
  let(:user) { create(:user) }
  let(:token) { JwtHandler.encode({ email: user.email }) }
  let(:valid_header) { { 'Authorization' => "Baerer #{token}"} }
  let(:task) { create(:task, title: "task 1") }

  describe "GET /index" do
    before do
      create_list(:task, 3)
    end
    it "return all tasks" do
      get '/tasks'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body).size).to eq(Task.count)
    end
  end

  describe "GET /show" do
    it "return specific task" do
      get "/tasks/#{task.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(task.id)
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      let(:valid_attributes) {{ 
        title: 'task1',
        description: 'task description1'
      }}

      it "creates a new Task" do
        expect {
          post '/tasks', params: { task: valid_attributes }
        }.to change(Task, :count).by(1)
      end
    end

    context "with invalid parameters" do
      let(:invalid_attributes) {{
        description: 'task_description1'
      }}

      it "does not create a new Task" do
        expect {
          post '/tasks', params: { task: invalid_attributes }
        }.to change(Task, :count).by(0)

        expect(JSON.parse(response.body)['errors']).not_to be_empty
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {{
        title: 'updated title',
        description: 'updated desc',
      }}

      it "updates the requested task" do
        patch "/tasks/#{task.id}", params: { task: new_attributes }
        task.reload

        expect(response).to have_http_status(:ok)
        expect(task.title).to eq("updated title")
        expect(task.description).to eq("updated desc")
      end
    end

    context "with invalid parameters" do
      let(:invalid_attributes) {{ title: 'a' * 51 }}
      
      it "renders a JSON response with errors for the task" do
        patch "/tasks/#{task.id}", params: { task: invalid_attributes }
        task.reload

        expect(response).to have_http_status(:unprocessable_entity)
        expect(task.title).to eq("task 1")
      end
    end
  end

  describe "DELETE /destroy" do
    subject { delete "/tasks/#{task.id}" } 

    it "destroys the requested task" do
      task.reload
      expect { subject }.to change(Task, :count).by(-1)
      expect(response).to have_http_status(:ok)
    end
  end
end
