class Department < ApplicationRecord
  has_many :students
  validates :title, presence: true
  validates :body, presence: true
end
