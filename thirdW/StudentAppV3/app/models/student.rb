class Student < ApplicationRecord
  belongs_to :department
  validates :name, presence: true
  validates :age, presence: true, numericality: true
end