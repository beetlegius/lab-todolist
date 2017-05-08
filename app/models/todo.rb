class Todo < ApplicationRecord
  default_scope -> { order created_at: :desc }
end
