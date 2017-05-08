require 'test_helper'

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get dashboard" do
    get todos_dashboard_url
    assert_response :success
  end

end
