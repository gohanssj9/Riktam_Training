class Classe < ApplicationRecord
  has_many :students
  validates :title, presence: true, length: {minimum: 5}
end
