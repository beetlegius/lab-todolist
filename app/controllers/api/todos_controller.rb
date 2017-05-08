module Api
  class TodosController < BaseController
    load_and_authorize_resource

    def index
      render json: @todos, status: :ok
    end

    def show
      render_todo @todo
    end

    def create
      @todo = Todo.create! todo_params
      render_todo @todo, :created
    end

    def update
      @todo.update! todo_params
      render_todo @todo
    end

    def destroy
      @todo.destroy
      render_todo @todo
    end

    private

    def todo_params
      params.require(:todo).permit(:name, :checked)
    end

    def render_todo(todo, status = :ok)
      render json: todo, status: status, location: [:api, todo]
    end

  end
end
