module Api
  class BaseController < ActionController::API
    include CanCan::ControllerAdditions

    def current_user
    end
  end
end
