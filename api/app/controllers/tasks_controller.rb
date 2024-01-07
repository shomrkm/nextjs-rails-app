class TasksController < ApplicationController
  before_action :set_task, only: %i[ show update destroy ]

  # GET /tasks
  def index
    tasks = Task.all
    render json: TaskSerializer.render_as_json(tasks), status: :ok
  end

  # GET /tasks/1
  def show
    if !@task
      render json: { errors: ["Task was not found with ID (#{params[:id]})"]}, status: :not_found
      return
    end

    render json: @task, status: :ok
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if !@task
      render json: { errors: ["Task was not found with ID (#{params[:id]})"]}, status: :not_found
      return
    end

    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    if !@task.destroy
      render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
      return
    end

    render json: {}, status: :ok
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_task
    @task = Task.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def task_params
    params.require(:task).permit(:title, :description, :no)
  end
end
