class Badge < ActiveRecord::Base
  belongs_to :student

  validates :comment, presence: true
  validates_length_of :comment, maximum: 140

end
