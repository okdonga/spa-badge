class BadgeSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :comment, :points
end
